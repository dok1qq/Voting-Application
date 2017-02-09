import { Component, Input } from '@angular/core';

@Component({
    selector: 'polar-component',
    templateUrl: 'polar.component.html'
})
export class PolarComponent {
  @Input() polarAreaChartData:number[];
  @Input() polarAreaChartLabels:string[];

  polarAreaLegend:boolean = true;
  polarAreaChartType:string = 'polarArea';
}
