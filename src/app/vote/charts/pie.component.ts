import { Component, Input } from '@angular/core';

@Component({
    selector: 'pie-component',
    templateUrl: 'pie.component.html'
})
export class PieComponent {
  @Input() pieChartData: number[];
  @Input() pieChartLabels: string[];

  public pieChartType:string = 'pie';
}
