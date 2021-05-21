import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public userName: string;
  public emailAddress: string;
  public password: string;

  constructor(private userService: UserService) { }
  registerUser(): void {
    const newUser = {userName: this.userName, emailAddress: this.emailAddress, password: this.password};
    this.userService.registerUser(newUser)
      .subscribe(response => this.userService.loginUser({email: response.emailAddress, password: this.password}), err => console.log(err));
  }

  ngOnInit() {
  }

}
