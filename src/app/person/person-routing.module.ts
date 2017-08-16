import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPersonPageComponent, PersonsListPageComponent, PersonDetailsPageComponent } from './containers';

const routes: Routes = [
  // localhost/persons
  {
    path: '',
    component: PersonsListPageComponent
  },
  // localhost/persons/add
  {
    path: 'add',
    component: AddPersonPageComponent
  },
  {
    path: ':id',
    component: PersonDetailsPageComponent
  }
];

export const routedComponents = [
  AddPersonPageComponent, PersonDetailsPageComponent,
  PersonsListPageComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
