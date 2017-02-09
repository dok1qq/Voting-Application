import { Component, Input } from '@angular/core';

@Component({
    selector: 'radar-component',
    templateUrl: 'radar.component.html'
})
export class RadarComponent {
  @Input() radarChartData: any[];
  @Input() radarChartLabels:string[];

  radarChartType:string = 'radar';
}
