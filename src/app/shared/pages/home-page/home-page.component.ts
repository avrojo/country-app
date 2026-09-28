import { Component } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  imports: [RouterOutlet, RouterLink],
})
export class HomePageComponent {
  constructor() {}
}
