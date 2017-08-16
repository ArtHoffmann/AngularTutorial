import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressesListPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: AddressesListPageComponent
  }
];

export const routedComponents = [AddressesListPageComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
