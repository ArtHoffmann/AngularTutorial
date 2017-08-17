import { NgModule } from '@angular/core';

import { AddressRoutingModule, routedComponents } from './address-routing.module';
import { AddressesTableComponent } from './components';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule,
    AddressRoutingModule
  ],
  declarations: [
    AddressesTableComponent,
    routedComponents
  ]
})
export class AddressModule { }
