import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdIconModule, MdCardModule, MdToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const MD_MODULES = [MdButtonModule, MdIconModule, MdCardModule, MdToolbarModule];

@NgModule({
  exports: [
    MD_MODULES,
    FlexLayoutModule,
    CommonModule
  ]
})
export class SharedModule { }
