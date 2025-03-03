import { Component, inject } from '@angular/core';
import {CryptoService} from '../../modules/crypto/services/crypto.service';

@Component({
  selector: 'app-pagination',
  template: `
    <div>
      <button
        *ngFor="let page of pages()"
        (click)="cryptoService.setPage(page)"
        [class.active]="page === cryptoService.currentPage()"
      >
        {{ page }}
      </button>
    </div>
  `,
  styles: [
    `
      .active {
        font-weight: bold;
      }
    `,
  ],
})
export class PaginationComponent {
  cryptoService = inject(CryptoService);

  // محاسبه تعداد صفحات
  pages = () => {
    const totalPages = Math.ceil(
      this.cryptoService.filteredData().length / this.cryptoService.itemsPerPage
    );
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };
}
