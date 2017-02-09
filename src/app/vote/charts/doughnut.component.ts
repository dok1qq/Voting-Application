import { Component, Input } from '@angular/core';

@Component({
    selector: 'doughnut-component',
    templateUrl: 'doughnut.component.html'
})
export class DoughnutComponent {
  @Input() doughnutChartData:number[];
  @Input() doughnutChartLabels:string[];

  doughnutChartType:string = 'doughnut';
}
