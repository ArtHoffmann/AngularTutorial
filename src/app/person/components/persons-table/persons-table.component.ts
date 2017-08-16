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

  triggerDelete(person: PersonPresentation) {
    this.onDelete.emit(person);
  }

  triggerSelect(person: PersonPresentation) {
    this.onSelect.emit(person);
  }

  get isEmpty(): boolean {
    return !this.data || this.data.length === 0;
  }
}
