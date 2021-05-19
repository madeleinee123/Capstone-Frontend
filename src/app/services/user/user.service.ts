import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from "rxjs";
import {Router} from "@angular/router";

const herokuUrl = 'http://localhost:9092';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: string;
  searchSubject = new Subject();
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient, private router: Router) { console.log('user service loaded'); }

  registerUser(newUser): any {
    console.log(newUser);
    return this.http
      .post(`${herokuUrl}/auth/users/register`, newUser, this.httpOptions)
      //.subscribe(response => console.log(response));
  }
  loginUser(user): void {
    console.log(user);

    this.http
      .post(`${herokuUrl}/auth/users/login`, user, this.httpOptions)
      .subscribe(response => {
        const token = response['jwt'];
        localStorage.setItem('currentUser', `${user.email}`);
        localStorage.setItem('token', `${token}`);
        console.log("localStorage");
        console.log(localStorage);
        console.log(response, token);
        this.currentUser = user.email;
        this.searchSubject.next(this.currentUser);
        this.router.navigate(['/lists']);
      }, err => console.log(err));
  }
  logoutUser(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUser = null;
    this.searchSubject.next(this.currentUser);
    this.router.navigate(['/login']);
  }
}
