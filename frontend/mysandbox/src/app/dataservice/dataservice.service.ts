import { Injectable } from '@angular/core';
import { MyUser, Activity, UserActivity } from './mydatatypes';

const users = [
  new MyUser(1, "Hayley", "D"),
  new MyUser(2, "Micah", "D"),
  new MyUser(3, "Gandhi", "J"),
  new MyUser(4, "Beibe", "Z"),
  new MyUser(5, "Justin", "S"),
  new MyUser(6, "Alex", "S")
];

const activities = [
  new Activity(1, "Went to Beer Friday"),
  new Activity(2, "Closed a ticket"),
  new Activity(3, "Squashed a bug"),
  new Activity(4, "Emoji!!"),
  new Activity(5, "Posted Cute Animal Picture")
];

const userAcivities = [
  new UserActivity(1, 1, 1),
  new UserActivity(2, 1, 2),
  new UserActivity(3, 1, 3),
  new UserActivity(4, 1, 4),
  new UserActivity(5, 1, 5),
  new UserActivity(6, 2, 1),
  new UserActivity(7, 2, 2),
  new UserActivity(8, 2, 3),
  new UserActivity(9, 2, 4),
  new UserActivity(10, 2, 5),
  new UserActivity(11, 3, 1),
  new UserActivity(12, 3, 2),
  new UserActivity(13, 3, 3),
  new UserActivity(14, 3, 4),
  new UserActivity(15, 3, 5),
  new UserActivity(16, 4, 1),
  new UserActivity(17, 4, 2),
  new UserActivity(18, 4, 3),
  new UserActivity(19, 4, 4),
  new UserActivity(20, 4, 5),
  new UserActivity(21, 5, 1),
  new UserActivity(22, 5, 2),
  new UserActivity(23, 5, 3),
  new UserActivity(24, 5, 4),
  new UserActivity(25, 5, 5),
  new UserActivity(26, 6, 1),
  new UserActivity(27, 6, 2),
  new UserActivity(28, 6, 3),
  new UserActivity(29, 6, 4),
  new UserActivity(30, 6, 5),
];


@Injectable()
export class DataService {

  getUsers() {
    return users;
  };

  getActivityTypes() {
    return activities;
  };
  
  getUserActivities() {
    return userAcivities;
  };
  
  
};
