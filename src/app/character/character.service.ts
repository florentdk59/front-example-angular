import {inject, Injectable, WritableSignal} from '@angular/core';
import {CharacterInfo} from './character.model';
import {HttpClient} from '@angular/common/http';

const API_CHARACTERS = 'http://localhost:8080/api/characters';

interface Character {
  id: string;
  name: string;
  urlPicture: string;
}

@Injectable({providedIn: 'root'})
export class CharacterService {

  private httpClient = inject(HttpClient);

  public fetchMarvelCharacters(characterList: WritableSignal<CharacterInfo[] | null>): void {
    this.httpClient.get<Character[]>(API_CHARACTERS).subscribe({
        next: (characters) => {
          let characterArray = new Array<CharacterInfo>();
          for(let character of characters) {
            characterArray.push(new CharacterInfo(character.id, character.urlPicture,  character.name));
          }
          characterList.set(characterArray);
        }
    });
  }

}
