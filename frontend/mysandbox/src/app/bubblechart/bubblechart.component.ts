import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../dataservice/dataservice.service';
import { MyUser, Activity, UserActivity } from '../dataservice/mydatatypes';

@Component({
  selector: 'bubble-chart',
  templateUrl: 'bubblechart.component.html',
})
export class BubbleChart  {

  @Input() public users: Promise<MyUser[]>;
  @Input() public activities: Promise<Activity[]>;
  @Input() public userActivities: Promise<UserActivity[]>;

  constructor(private dataService: DataService,
              private router: Router){
  };

  ngOnInit() {
    this.dataService.getUsers().then(response => this.users = response.json().data);
    this.dataService.getActivityTypes().then(response => this.activities = response.json().data);
    this.dataService.getUserActivities().then(response => this.userActivities = response.json().data);
  }
};
