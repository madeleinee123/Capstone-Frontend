import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GroupService} from "../services/group/group.service";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groupId: string;
  group: any;
  groupName: string;
  groupDescription: string;
  taskName = '';
  dueDate = '';
  consequence = '';
  priority: number;
  priority1 = [];
  priority2 = [];
  priority3 = [];

  constructor(private route: ActivatedRoute, private groupService: GroupService) { }

  createTask(): any {
    console.log('component: ', this.group, this.taskName, this.priority);
    const newTask = {
      title: this.taskName,
      priority: this.priority,
      consequence: this.consequence,
      dueDate: this.dueDate,
      complete: false
    };
    this.groupService.createTask(this.group, newTask).subscribe(response => {
      if (this.priority == 1) {
        this.priority1.push(response);
      } else if (this.priority == 2) {
        this.priority2.push(response);
      } else {
        this.priority3.push(response);
      }
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe( params => {
        this.groupId = params.get('id');
        this.groupService.getGroup(this.groupId).subscribe(response => {
          this.group = response;
          this.sortTasks(this.group.taskList);
          console.log(this.group.taskList);
        });
      });

  }

  sortTasks(list: any[]): void{
    for(let i=0; i < list.length; i++) {
      if (list[i].priority == null || list[i].priority == 1) {
        this.priority1.push(list[i]);
      } else if (list[i].priority == 2) {
        this.priority2.push(list[i]);
      } else {
        this.priority3.push(list[i]);
      }
    }
  }

  deleteGroup(): void {
    this.groupService.deleteGroup(this.group);
  }

  editGroup(): void {
    const group = {
      id: this.group.id,
      name: this.groupName,
      description: this.groupDescription,
      taskList: this.group.taskList,
      user: this.group.user
    };
    this.groupService.editGroup(group).subscribe(response => {
      console.log(response);
      this.group = response;
    }, err => console.log(err));
  }
}
