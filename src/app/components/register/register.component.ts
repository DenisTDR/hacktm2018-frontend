import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ConstantsService } from '../../services/constants.service';
import { RegisterModel } from '../../models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public passwordsFormGroup: FormGroup;

  public minPasswordLength = 6;
  public status: string = null;
  public errorMessage: string = null;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private dialogRef: MatDialogRef<RegisterComponent>,
    private snackBar: MatSnackBar,
    private constants: ConstantsService) { 
      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(this.constants.emailRegex)]],
        passwords: this.passwordsFormGroup =
          this.formBuilder.group({
            password: ['', [Validators.required,
              Validators.pattern(`.{${this.minPasswordLength},}`)]],
            repeatPassword: ['', Validators.required]
          }, {validator: this.areEqual})
      });
    }

    public formSubmit($event): void {
      if (!this.registerForm.valid) {
        return;
      }
      const model: RegisterModel = {
        email: this.registerForm.value.email,
        password: this.passwordsFormGroup.value.password,
      };
      this.status = 'loading';
      this.authService.register(model).subscribe(result => {
          this.status = 'success';
          this.snackBar.open('Te-ai înregistrat cu succes! Vei primi un email de confirmare.', 'Ok', {
            duration: 10000,
          });
          this.dialogRef.close();
        },
        error => {
          this.status = 'error';
          if (!error.status) {
            this.snackBar.open('Nu există conexiune la internet', 'Ok', {
              duration: 10000
            });
          } else if (error._body != null) {
            if(error.status == 401)
            {
              this.snackBar.open('Nu aveți acces la aceasta funcționalitate', 'Ok', {
                duration: 10000
              });
            }
            else if(error.status == 500)
            {
              this.snackBar.open('A apărut o eroare neașteptată', 'Ok', {
                duration: 10000
              });
            }
            else {
              const errorBody = error['_body'];
              //console.log(errorBody);
              if (errorBody && typeof errorBody === 'string' && errorBody.indexOf('[') === 0) {
                const errors = JSON.parse(errorBody);
                const errorDescriptions: string[] = [];
                errors.forEach(err => errorDescriptions.push(err.description));
                this.errorMessage = errorDescriptions.join('<br>');
              } else {
                this.errorMessage = typeof errorBody === 'string' ? errorBody : '';
              }
              this.snackBar.open(this.errorMessage.replace(new RegExp('<br>', 'g'), ','), 'Ok', {
                duration: 10000,
              });
            }
          }
        });
    }

    private areEqual(group: FormGroup) {
      let valid = true;
      let firstValue: string;

      for (const name in group.controls) {
        if (!group.controls.hasOwnProperty(name)) {
          continue;
        }
        const val = group.controls[name].value;
        if (typeof firstValue === 'undefined') {
          firstValue = val;
        }
        if (firstValue !== val) {
          valid = false;
          break;
        }
      }
      if (valid) {
        return null;
      }
      const repeatPasswordControl: any = group.controls['repeatPassword'];
      repeatPasswordControl.setErrors({areEqual: true});

      return {
        areEqual: true
      };
    }

  ngOnInit() {
  }

}
