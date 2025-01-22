import {Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import {CustomH1TitleComponent} from '../custom-h1-title/custom-h1-title.component';

interface Route {
  path: string,
  name: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterLink, CustomH1TitleComponent]
})
export class HeaderComponent {

  readonly routeElements:Route[] = [
    {
      path: "home", name: "Home Page"
    },
    {
      path: "characters", name: "Marvel Characters"
    },
  ];

}
