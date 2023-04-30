import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
      rememberMe: new FormControl<boolean>(false),
    });
  }

  submitForm() {
    console.log("submited");
    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }
    this.authenticationService.login(credentials);

    if(this.loginForm.value.rememberMe && this.authenticationService.user)
      localStorage.setItem("RememberedUser", JSON.stringify(this.authenticationService.user));
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
