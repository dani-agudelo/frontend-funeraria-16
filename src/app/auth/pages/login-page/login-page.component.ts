import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject( FormBuilder );
  private authService = inject( AuthService );
  private router = inject( Router );

  private recaptchaCompleted = false;
  private siteKeyReCaptcha = environment.siteKeyReCaptcha;


  //* VALORES POR DEFECTO
  public myForm: FormGroup = this.fb.group({
    email: ['daniagudelom@gmail.com', [Validators.required, Validators.email]], 
    password: ['1234', [Validators.required, Validators.minLength(6)]]
  });

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.recaptchaCompleted = true;
  }

  login() {

    if( !this.recaptchaCompleted ) {
      Swal.fire('Error', 'Por favor complete el captcha', 'error');
      return;
    }

    const email = this.myForm.get('email')?.value;
    const password = this.myForm.get('password')?.value;

    console.log(email, password );

    this.authService.login( email, password ) //*<-- logica del login!
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (err) => {
          Swal.fire('Error', err, 'error');
        }
      })
  }


}
