import { Component, computed, EventEmitter, input, output} from '@angular/core';

@Component({
  selector: 'app-character',
  standalone: false,
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  id = input.required<string>();
  name = input<string>("unknown");
  avatar = input.required<string>();

  myselect = output<string>();
  //@Output() myselect = new EventEmitter();

  selectedCharacterImagePath = computed(() => this.avatar());
  selectedCharacterName = computed(() => this.name());

  actionSelectCharacter() {
    this.myselect.emit(this.id());
  }

}
