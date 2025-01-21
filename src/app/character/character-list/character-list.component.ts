import { Component, signal, inject, computed } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HttpClient } from '@angular/common/http';
import { CharacterComponent } from "character/character.component";
import { CharacterDetailsComponent } from "character/character-details/character-details.component";
import { CharacterInfo } from 'character/character-info.model';

const API_CHARACTERS = 'http://localhost:8080/api/characters';

interface Character {
  id: string;
  name: string;
  urlPicture: string;
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
  imports: [CharacterComponent, CharacterDetailsComponent, MatProgressSpinnerModule]
})
export class CharacterListComponent {
  characterList = signal<CharacterInfo[] | null>(null);
  selectedCharacterId = signal<string>("");
  selectedCharacter = computed((): CharacterInfo | null => this.characterList()?.find((character) => character.id == this.selectedCharacterId()) ?? null);

  private httpClient = inject(HttpClient);

  ngOnInit() {

    this.httpClient.get<Character[]>(API_CHARACTERS)
    .subscribe({
      next: (characters) => {
        var characterArray = new Array<CharacterInfo>();
        for(let character of characters) {
          characterArray.push(new CharacterInfo(character.id, character.urlPicture,  character.name));
        }
        this.characterList.set(characterArray);
      }
    });
  }

  onSelectCharacter(id: string) {
    // alert("character-list : selected id = " + id);
    this.selectedCharacterId.set(id);
  }
}
