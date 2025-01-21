import { Routes } from '@angular/router';
import { CharacterListComponent } from 'character/character-list/character-list.component';
import { HomepageComponent } from 'homepage/homepage.component';

export const routes: Routes = [

  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home", component: HomepageComponent
  },
  {
    path: "characters", component: CharacterListComponent
  }

];
