import { Component, computed, EventEmitter, input, output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  id = input.required<string>();
  name = input<string>("unknown");
  avatar = input.required<string>();

  myselect = output<string>();
  //@Output() myselect = new EventEmitter();

  selectedUserImagePath = computed(() => this.avatar());
  selectedUserName = computed(() => this.name());

  actionSelectUser() {
    this.myselect.emit(this.id());
  }

}
