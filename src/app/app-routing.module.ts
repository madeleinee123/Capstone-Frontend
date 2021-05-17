import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {GroupsComponent} from './groups/groups.component';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {GroupComponent} from './group/group.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'groups',
    component: GroupsComponent,
    children: [
      {
        path: ':id',
        component: GroupComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
