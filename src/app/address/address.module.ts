import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule, routedComponents } from './address-routing.module';
import { AddressesTableComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    AddressRoutingModule
  ],
  declarations: [
    AddressesTableComponent,
    routedComponents
  ]
})
export class AddressModule { }
