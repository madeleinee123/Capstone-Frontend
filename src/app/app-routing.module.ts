import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {GroupsComponent} from './groups/groups.component';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {GroupComponent} from './group/group.component';
import {LogoutComponent} from './logout/logout.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'lists',
    component: GroupsComponent,
  },
  {
    path: 'lists/:id',
    component: GroupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
