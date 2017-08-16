import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPersonPageComponent } from './containers';

const routes: Routes = [
  // localhost/persons
  {
    path: '',
    redirectTo: 'add',
    pathMatch: 'full'
  },
  // localhost/persons/add
  {
    path: 'add',
    component: AddPersonPageComponent
  }
];

export const routedComponents = [AddPersonPageComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
