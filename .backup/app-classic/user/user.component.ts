import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users'

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = this.getRandomUser();

  get selectedUserImagePath() {
    return "users/" + this.selectedUser.avatar;
  }

  onSelectUser() {
      this.selectedUser = this.getRandomUser();
  }

  getRandomUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    return DUMMY_USERS[randomIndex];
  }

}
