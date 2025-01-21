import { Component, signal, computed } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CharacterCardComponent } from "character/character-card/character-card.component";
import { CharacterDetailsComponent } from "character/character-details/character-details.component";
import { CharacterInfo } from 'character/character.model';
import {CharacterService} from 'character/character.service';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
  imports: [CharacterCardComponent, CharacterDetailsComponent, MatProgressSpinnerModule]
})
export class CharacterListComponent {
  characterList = signal<CharacterInfo[] | null>(null);
  selectedCharacterId = signal<string>("");
  selectedCharacter = computed((): CharacterInfo | null => this.characterList()?.find((character) => character.id == this.selectedCharacterId()) ?? null);

  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    this.characterService.fetchMarvelCharacters(this.characterList);
  }

  onSelectCharacter(id: string) {
    // alert("character-list : selected id = " + id);
    this.selectedCharacterId.set(id);
  }
}
