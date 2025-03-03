import {Component, output} from '@angular/core';

@Component({
  selector: 'app-search-simple',
  template: `
    <input
      type="text"
      placeholder="Search by name..."
      (input)="onSearch($event)"
    />
  `,
})
export class SearchSimpleComponent {
  constructor() {}
  queryNameChange = output<string>();
  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.queryNameChange.emit(query);
  }
}
