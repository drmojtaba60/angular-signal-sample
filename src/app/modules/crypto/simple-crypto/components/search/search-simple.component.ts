import {Component, output} from '@angular/core';

@Component({
  selector: 'app-search-simple',
  templateUrl:'search-simple.component.html',
  styleUrls:['search-simple.component.css']
})
export class SearchSimpleComponent {
  constructor() {}
  queryNameChange = output<string>();
  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.queryNameChange.emit(query);
  }
}
