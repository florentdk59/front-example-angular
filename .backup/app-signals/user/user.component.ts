import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from './dummy-users'

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(this.getRandomUser());
  selectedUserImagePath = computed(() => "users/" + this.selectedUser().avatar);
  selectedUserName = computed(() => this.selectedUser().name);

  onSelectUser() {
    this.selectedUser.set(this.getRandomUser());
  }

  getRandomUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    return DUMMY_USERS[randomIndex];
  }

}
