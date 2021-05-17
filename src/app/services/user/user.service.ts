import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const herokuUrl = 'http://localhost:9092';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { console.log('user service loaded'); }

  registerUser(newUser) {
    console.log(newUser);
    return this.http
      .post(`${herokuUrl}/auth/users/register`, newUser);
  }
  loginUser(user): void {
    console.log(user);
    this.http
      .post(`${herokuUrl}/auth/users/login`, user)
      .subscribe(response => {
        // tslint:disable-next-line:no-string-literal
        const token = response['jwt'];
        localStorage.setItem('currentUser', `${user.email}`);
        localStorage.setItem('token', `${token}`);
        console.log(response, token);
      }, err => console.log(err));
  }
}
