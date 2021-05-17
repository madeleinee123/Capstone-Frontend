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
}
