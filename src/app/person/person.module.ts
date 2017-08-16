import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonRoutingModule, routedComponents } from './person-routing.module';
import { PersonFormComponent } from './components';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PersonRoutingModule
  ],
  declarations: [
    PersonFormComponent,
    routedComponents
  ]
})
export class PersonModule { }
