import { Component } from '@angular/core';
import {CryptoService} from '../../modules/crypto/services/crypto.service';

@Component({
  selector: 'app-sort',
  template: `
    <select (change)="onSort($event)">
      <option value="">Sort by</option>
      <option value="name-asc">Name (A-Z)</option>
      <option value="name-desc">Name (Z-A)</option>
      <option value="priceUsd-asc">Price (Low to High)</option>
      <option value="priceUsd-desc">Price (High to Low)</option>
    </select>
  `,
})
export class SortComponent {
  constructor(private cryptoService: CryptoService) {}

  onSort(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    const [field, order] = value.split('-') as [string, 'asc' | 'desc'];
    this.cryptoService.sortData(field, order);
  }
}
