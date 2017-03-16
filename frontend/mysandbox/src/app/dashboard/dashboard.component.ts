import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../dataservice/dataservice.service';


@Component({
  selector: 'dash',
  templateUrl: 'dashboard.component.html',
})
export class Dashboard  {

  constructor(private dataService: DataService,
              private router: Router){
  };

  goToD3() {
    console.log("going to D3!!");
    this.router.navigate(['bubblechart/']);
  };

};
