import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { LoginCredentials } from '../authentication/interfaces/login-credentials.interface';
import { RegisterCredentials } from '../authentication/interfaces/register-credentials.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser: User | null = null;

  private baseURL = 'http://localhost:5000/api/Users';

  constructor() { 
    // Check for stored credentials
    const storedData = localStorage.getItem("RememberedUser");
    if(storedData)
      this.currentUser = JSON.parse(storedData);
  }

  async login(credentials: LoginCredentials) {
    const response = await fetch(
      `${this.baseURL}/login`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...credentials
        }),
      }
    );
    console.log(response);
    return response.status;
    // if(credentials.email === 'test@test.com' && credentials.password === 'password'){
    //   this.currentUser = {
    //     id: '1',
    //     email: 'test@test.com',
    //   }
      
    //   console.log(this.currentUser);
    // }
    // else
    //   console.log("Wrong credentials");
  }

  async register(credentials: RegisterCredentials) {
    const response = await fetch(
      `${this.baseURL}/register`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          name: credentials.firstName,
          surname: credentials.lastName,
        }),
      }
    );
    
    return response.status;
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
