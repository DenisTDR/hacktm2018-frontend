import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { ConstantsService } from '../../services/constants.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  public minPasswordLength = 6;
  public status: string = null;
  public errorMessage: string = null;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<LoginComponent>,
    private snackBar: MatSnackBar,
    private constantsService: ConstantsService) { 
      
      this.loginForm = this.formBuilder.group({
        'email': ['', [Validators.required, Validators.pattern(this.constantsService.emailRegex)]],
        'password': ['', [Validators.required]]
      });
    }

  ngOnInit() {

  }

  public formSubmit($event: any): void {
    if (!this.loginForm.valid) {
      return;
    }
    const model: any = this.loginForm.value;
    model.username = model.email;
    this.authService.login(this.loginForm.value).subscribe(response => {
        this.snackBar.open('Login successfully!', 'Ok', {
          duration: 10000,
        });
        this.dialogRef.close(true);
        //this.router.navigate(['/admin']);
      },
      error => {
        this.status = 'error';
        if (!error.status) {
          this.snackBar.open(`You don't have internet connection`, 'Ok', {
            duration: 10000
          });
        } else if (error._body != null) {
          if (error.status === 401) {
            this.snackBar.open(`You don't access to this functionality`, 'Ok', {
              duration: 10000
            });
          } else if (error.status === 500) {
            this.snackBar.open('An error occured', 'Ok', {
              duration: 10000
            });
          } else {
            const errorBody = error['_body'];
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

  public openRegisterModal(): void {
    //console.log('openRegisterModal');
    this.dialogRef.close(false);
    setTimeout(() => {
      this.dialog.open(RegisterComponent, {width: '400px'});
    }, 500);
  }
}
