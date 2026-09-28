import { Component, input, output} from '@angular/core';
import { Region, REGIONS } from '../../interfaces/Regions.type';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'region-options',
  templateUrl: './region-options.component.html',
    imports: [TitleCasePipe],
  
})
export class RegionOptionsComponent {
  value = output<Region>();
  activeRegion = input<Region>();
  regions = REGIONS;

}
