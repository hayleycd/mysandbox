import { Injectable } from '@angular/core';
import { MyUser, Activity, UserActivity } from './mydatatypes';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  constructor(private http: Http) { };

  getUsers() {
    return this.http.get('/src/app/dataservice/users.json').toPromise();
  };

  getActivityTypes() {
    return this.http.get('/src/app/dataservice/activities.json').toPromise();
  };

  getUserActivities() {
    return this.http.get('/src/app/dataservice/useractivities.json').toPromise();
  };


};
