import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { PersonPresentation } from './../../../models/person/person';

@Component({
  selector: 'app-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['./persons-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonsTableComponent {
  @Input()
  data: PersonPresentation[] = [];

  @Output()
  onDelete = new EventEmitter<PersonPresentation>();

  @Output()
  onSelect = new EventEmitter<PersonPresentation>();

  get isEmpty(): boolean {
    return this.data.length === 0;
  }
}
