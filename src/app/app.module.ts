import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { provideHttpClient } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule],
  providers: [provideHttpClient()]
})
export class AppModule {}
