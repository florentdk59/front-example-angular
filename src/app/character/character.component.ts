import { Component, computed, input, output} from '@angular/core';
import {RoundedDivComponent} from '../rounded-div/rounded-div.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  imports: [
    RoundedDivComponent,
    NgOptimizedImage
  ],
  styleUrl: './character.component.css'
})
export class CharacterComponent {
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
