import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Credential } from '../interfaces/credentials.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser!: User;

  constructor() { }

  login(credentials: Credential) {
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

  get user(): User {
    return this.currentUser;
  }
}
