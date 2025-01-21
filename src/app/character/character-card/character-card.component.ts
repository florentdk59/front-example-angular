import { Component, computed, input, output} from '@angular/core';
import {RoundedDivComponent} from 'commons/rounded-div/rounded-div.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character-card.component.html',
  imports: [
    RoundedDivComponent,
    NgOptimizedImage
  ],
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  id = input.required<string>();
  name = input<string>("unknown");
  avatar = input.required<string>();

  eventCharacterSelected = output<string>();
  //@Output() eventCharacterSelected = new EventEmitter();

  characterImagePath = computed(() => this.avatar());
  characterName = computed(() => this.name());

  actionSelectCharacter() {
    this.eventCharacterSelected.emit(this.id());
  }

}
