import { Component } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'page-not-found',
  templateUrl: './not-found-page.component.html',
  imports: [RouterOutlet, RouterLink],
})
export class NotFoundComponent {

  constructor() { }

  

}
