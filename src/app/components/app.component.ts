import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CharacterListComponent } from './character-list/character-list.component';

@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [RouterOutlet, HeaderComponent, CharacterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-angular-app';
}
