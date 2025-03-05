import {Component, computed, input, InputSignal, output, signal} from '@angular/core';
@Component({
  selector: 'app-pagination-simple',
  templateUrl: 'pagination-simple.component.html',
  styleUrl:'pagination-simple.component.css' ,
})
export class PaginationSimpleComponent {
  totalPages : InputSignal<number> = input(0);
  pageSize =input(10);
  changePage =output<number>();
  currentPage =signal(1);
  // محاسبه تعداد صفحات
  pages = computed(() => {
    const totals = Math.ceil(
      this.totalPages() / this.pageSize()
    );
    return Array.from({ length: totals }, (_, i) => i + 1);
  });
  changePageHandler = (ev:Event, page: number) => {
    ev.preventDefault();
    this.currentPage.set(page);
    this.changePage.emit(page);
  }
}
