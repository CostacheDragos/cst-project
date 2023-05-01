import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CredentialsValidators } from '../../helpers/credentials-validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    if(this.authenticationService.isAuthenticated) {
      this.navigateToMain();
      return;
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl<string>('', [Validators.required, CredentialsValidators.emailValidator]),
      password: new FormControl<string>('', [Validators.required]),
      rememberMe: new FormControl<boolean>(false),
    });
  }

  submitForm() {
    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }
    this.authenticationService.login(credentials);

    // If the user has logged in successfully, redirect to the main page
    if(this.authenticationService.isAuthenticated) {
      // If the rememberMe option is checked, store user credentials in local storage
      if(this.loginForm.value.rememberMe)
        localStorage.setItem("RememberedUser", JSON.stringify(this.authenticationService.user));

      this.navigateToMain();
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToMain() {
    this.router.navigate(['/main']);
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
