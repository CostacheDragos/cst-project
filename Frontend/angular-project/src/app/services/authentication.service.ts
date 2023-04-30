import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { LoginCredentials } from '../authentication/interfaces/login-credentials.interface';
import { RegisterCredentials } from '../authentication/interfaces/register-credentials.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser!: User;

  constructor() { }

  login(credentials: LoginCredentials) {
    if(credentials.email === 'test@test.com' && credentials.password === 'password'){
      this.currentUser = {
        id: '1',
        email: 'test@test.com',
      }
      
      console.log(this.currentUser);
    }
    else
      console.log("Wrong credentials");
  }

  register(credentials: RegisterCredentials) {
    this.currentUser = {
      id: '1',
      email: credentials.email,
    }
    // TODO create account using the provided credentials.
    console.log(this.currentUser);
  }

  get user(): User {
    return this.currentUser;
  }
}
