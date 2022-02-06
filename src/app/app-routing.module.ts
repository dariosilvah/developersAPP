import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DevelopersComponent} from "./components/developers/developers.component";
import {LevelsComponent} from "./components/levels/levels.component";
import {DevelopersListComponent} from "./components/developers/developers-list/developers-list.component";
import {DevelopersNewComponent} from "./components/developers/developers-new/developers-new.component";
import {LevelsListComponent} from "./components/levels/levels-list/levels-list.component";
import {LevelsNewComponent} from "./components/levels/levels-new/levels-new.component";
import {DevelopersEditComponent} from "./components/developers/developers-edit/developers-edit.component";
import {LevelsEditComponent} from "./components/levels/levels-edit/levels-edit.component";

const routes: Routes = [{
  path: '',
  redirectTo: 'developers',
  pathMatch: 'full'
}, {
  path: 'developers',
  component: DevelopersComponent,
  children: [{
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }, {
    path: 'list',
    component: DevelopersListComponent
  }, {
    path: 'edit/:id',
    component: DevelopersEditComponent
  }, {
    path: 'new',
    component: DevelopersNewComponent
  }]
}, {
  path: 'levels',
  component: LevelsComponent,
  children: [{
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }, {
    path: 'list',
    component: LevelsListComponent
  }, {
    path: 'edit/:id',
    component: LevelsEditComponent
  }, {
    path: 'new',
    component: LevelsNewComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
