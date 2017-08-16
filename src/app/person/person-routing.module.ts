import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPersonPageComponent, PersonsListPageComponent } from './containers';

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
  }
];

export const routedComponents = [AddPersonPageComponent, PersonsListPageComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
