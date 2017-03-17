import { Component, ViewChild } from '@angular/core';

import { BubbleChart } from './bubblechart.component';


@Component({
  selector: 'parent-bubble-chart',
  template: "<bubble-chart [users]='users' [activities]='activities' [userActivities]='userActivities'></bubble-chart>",
})
export class ParentBubbleChart  {

@ViewChild(BubbleChart)
bubbleChart:BubbleChart;

};
