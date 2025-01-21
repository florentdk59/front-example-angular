import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Route {
  path: string,
  name: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterLink]
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
