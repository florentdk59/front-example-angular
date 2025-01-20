import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app.component";
import { HeaderComponent } from "./components/header/header.component";
import { CharacterListComponent } from "./components/character-list/character-list.component";
import { CharacterComponent } from "./components/character/character.component";
import { provideHttpClient } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterListComponent,
    CharacterComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule],
  providers: [provideHttpClient()]
})
export class AppModule {}
