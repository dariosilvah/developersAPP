import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DevelopersComponent} from './components/developers/developers.component';
import {LevelsComponent} from './components/levels/levels.component';
import {DevelopersListComponent} from './components/developers/developers-list/developers-list.component';
import {DevelopersNewComponent} from './components/developers/developers-new/developers-new.component';
import {LevelsNewComponent} from './components/levels/levels-new/levels-new.component';
import {LevelsListComponent} from './components/levels/levels-list/levels-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { DevelopersEditComponent } from './components/developers/developers-edit/developers-edit.component';
import { LevelsEditComponent } from './components/levels/levels-edit/levels-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DevelopersComponent,
    LevelsComponent,
    DevelopersListComponent,
    DevelopersNewComponent,
    LevelsNewComponent,
    LevelsListComponent,
    DevelopersEditComponent,
    LevelsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
