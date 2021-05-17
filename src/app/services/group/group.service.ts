import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const herokuUrl = 'http://localhost:9092';
@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getGroups(): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/groups`, requestOptions);
  }
  createGroup(newGroup): any {
    console.log(newGroup);
    const token = localStorage.getItem('token');
    console.log("localStorage in group service");
    console.log(localStorage)
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/groups/`, newGroup, requestOptions);
  }
}
