import { Component, input } from '@angular/core';
import { CharacterInfo } from 'model/character-info.model';

@Component({
  selector: 'app-character-details',
  imports: [],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
  character = input<CharacterInfo | null>();
}
