import { Component, OnInit } from '@angular/core';
import {GroupService} from "../services/group/group.service";
declare const M;

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  public lists: any[];
  public listName: string;
  public listDescription: string;

  constructor(private groupService: GroupService) { }

  getGroups(): any {
    this.groupService.getGroups().subscribe(response => {
      this.lists = response;
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getGroups();
    if (!localStorage.getItem('currentUser')) {
      const toastHTML = '<span>You must login to see your lists</span>';
      M.toast({html: toastHTML});
    }
  }
  createList(): any {
    const newList = {
      name: this.listName,
      description: this.listDescription
    };
    this.groupService.createGroup(newList).subscribe(response => {
      this.lists = [...this.lists, response];
    }, err => console.log(err));
  }
}
