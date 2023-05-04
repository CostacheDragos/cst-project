import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { LoginCredentials } from '../authentication/interfaces/login-credentials.interface';
import { RegisterCredentials } from '../authentication/interfaces/register-credentials.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser: User | null = null;

  constructor() { 
    // Check for stored credentials
    const storedData = localStorage.getItem("RememberedUser");
    if(storedData)
      this.currentUser = JSON.parse(storedData);
  }

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

  logout() {
    // Remove the remembered user (nothing will happen if there is no remembered user)
    localStorage.removeItem("RememberedUser");

    this.currentUser = null;
  }

  get user(): User | null {
    return this.currentUser;
  }
  get isAuthenticated() : boolean {
    return this.currentUser ? true : false;
  }
}
