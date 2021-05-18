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
  taskName = '';

  constructor(private route: ActivatedRoute, private groupService: GroupService) { }

  createTask(): any {
    console.log('component: ', this.group, this.taskName);
    const newTask = {
      name: this.taskName
    };
    this.groupService.createTask(this.group, newTask).subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe( params => {
        this.groupId = params.get('id');
        this.groupService.getGroup(this.groupId).subscribe(response => {
          this.group = response;
          console.log(this.group);
        });
      });
  }
}
