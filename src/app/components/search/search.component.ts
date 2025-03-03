import { Component } from '@angular/core';
import {SignalStore} from '../../modules/crypto/services/store.service';

@Component({
  selector: 'app-search',
  template: `
    <input
      type="text"
      placeholder="Search by name..."
      (input)="onSearch($event)"
    />
  `,
})
export class SearchComponent {
  constructor(private store: SignalStore) {}

  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.store.searchName.update(value => {
      //value = query;
      return query;
    });
  }
}
