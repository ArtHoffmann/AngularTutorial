import { AddressPresentation } from './../../../models/address/address';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-addresses-table',
  templateUrl: './addresses-table.component.html',
  styleUrls: ['./addresses-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressesTableComponent {
  @Input()
  data: AddressPresentation[] = [];

  @Output()
  onDelete = new EventEmitter<AddressPresentation>();

  @Output()
  onSelect = new EventEmitter<AddressPresentation>();

  triggerDelete(address: AddressPresentation) {
    this.onDelete.emit(address);
  }

  triggerSelect(address: AddressPresentation) {
    this.onSelect.emit(address);
  }

  get isEmpty(): boolean {
    return !this.data || this.data.length === 0;
  }
}
