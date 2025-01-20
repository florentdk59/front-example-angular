import { Component, computed, EventEmitter, input, output} from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
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
  characterDetails = computed(() => this.characterImagePath());

  actionSelectCharacter() {
    this.eventCharacterSelected.emit(this.id());
  }

}
