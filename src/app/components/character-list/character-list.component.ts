import { Component, Input, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_CHARACTERS = 'http://localhost:8080/api/characters';
interface CharacterInfo {
  id: string;
  avatar: string;
  name: string;
}
interface Character {
  id: string;
  name: string;
  urlPicture: string;
}

@Component({
  selector: 'app-character-list',
  standalone: false,
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  characterList = signal<CharacterInfo[]>([]);

  private httpClient = inject(HttpClient);

  ngOnInit() {

    this.httpClient.get<Character[]>(API_CHARACTERS)
    .subscribe({
      next: (characters) => {
        var characterArray = new Array<CharacterInfo>();
        for(let character of characters) {
          characterArray.push({
            id: character.id,
            avatar: character.urlPicture,
            name: character.name
          });
        }
        this.characterList.set(characterArray);
      }
    });
  }

  onSelectCharacter(id: string) {
    alert("character-list : selected id = " + id);
  }
}
