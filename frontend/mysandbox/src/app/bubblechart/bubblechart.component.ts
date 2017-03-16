import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../dataservice/dataservice.service';
import { MyUser, Activity, UserActivity } from '../dataservice/mydatatypes';

@Component({
  selector: 'bubble-chart',
  templateUrl: 'bubblechart.component.html',
})
export class BubbleChart  {

  users: MyUser[];
  activities: Activity[];
  userActivities: UserActivity[];

  constructor(private dataService: DataService,
              private router: Router){
  };

  ngOnInit() {
    this.users = this.dataService.getUsers();
    this.activities = this.dataService.getActivityTypes();
    this.userActivities = this.dataService.getUserActivities();
  }
};
