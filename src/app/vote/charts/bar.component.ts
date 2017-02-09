import { Component, Input } from '@angular/core';

@Component({
    selector: 'bar-component',
    templateUrl: 'bar.component.html'
})
export class BarComponent {
  @Input() barChartData: any[];
  @Input() barLabels: any[];

  barChartType:string = 'bar';
  barChartLegend:boolean = true;
  barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  };
}
