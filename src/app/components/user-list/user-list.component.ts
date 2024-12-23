import { Component, Input, signal, computed, inject } from '@angular/core';
import { DUMMY_USERS } from './dummy-users'
import { HttpClient } from '@angular/common/http';

const API_CHARACTERS = 'http://localhost:8080/api/characters';
interface UserInfo {
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
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  userList = signal<UserInfo[]>([]);

  private httpClient = inject(HttpClient);

  ngOnInit() {

    this.httpClient.get<Character[]>(API_CHARACTERS)
    .subscribe({
      next: (characters) => {
        var userArray = new Array<UserInfo>();
        for(let character of characters) {
          userArray.push({
            id: character.id,
            avatar: character.urlPicture,
            name: character.name
          });
        }
        this.userList.set(userArray);
      }
    });
  }
  onSelectUser(id: string) {
    alert("user-list : selected id = " + id);
  }
}
