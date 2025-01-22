import {Component} from '@angular/core';

@Component({
  selector: 'h1[appCustomH1Title]',
  imports: [],
  templateUrl: './custom-h1-title.component.html',
  styleUrl: './custom-h1-title.component.css',
  host: {
    class: 'custom-h1-title'
  }
})
export class CustomH1TitleComponent {

}
