import { Component, input } from '@angular/core';
import { CharacterInfo } from 'components/character/character-info.model';
import {RoundedDivComponent} from "../../rounded-div/rounded-div.component";

@Component({
  selector: 'app-character-details',
    imports: [
        RoundedDivComponent
    ],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
  character = input<CharacterInfo | null>();
}
