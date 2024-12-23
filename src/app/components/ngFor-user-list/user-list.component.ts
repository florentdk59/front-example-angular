import { Component, Input, signal, computed } from '@angular/core';
import {CommonModule} from '@angular/common';
import { UserComponent } from '../components/user/user.component';
import { DUMMY_USERS } from './dummy-users'

interface UserInfo {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  userList: UserInfo[] = DUMMY_USERS;

  onSelectUser(id: string) {
    alert("user-list : selected id = " + id);
  }
}
