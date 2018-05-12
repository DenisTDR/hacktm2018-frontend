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
        username: ['', [Validators.required]],
        email: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        birthdate: ['', [Validators.required]],
        city: ['', [Validators.required]],
        country: ['', [Validators.required]],
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
        username: this.registerForm.value.username,
        email: this.registerForm.value.email,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        birthdate: this.registerForm.value.birthdate,
        city: this.registerForm.value.city,
        country: this.registerForm.value.country,
        password: this.passwordsFormGroup.value.password,
      };
      this.status = 'loading';
      this.authService.register(model).subscribe(result => {
          this.status = 'success';
          this.snackBar.open('Register successfuly', 'Ok', {
            duration: 10000,
          });
          this.dialogRef.close();
        },
        error => {
          console.log(error);
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
