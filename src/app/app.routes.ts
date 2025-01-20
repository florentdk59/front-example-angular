import { Routes } from '@angular/router';
import { CharacterListComponent } from 'components/character/character-list/character-list.component';
import { HomepageComponent } from 'components/homepage/homepage.component';

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
