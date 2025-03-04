import {computed, effect, Injectable, signal, WritableSignal} from '@angular/core';
import {CryptoApiService} from './crypto.service';
import {single} from 'rxjs';
import CryptoModel from "../models/sortModel";

@Injectable({
  providedIn: 'root',
})
export class SignalStore {
  private itemsPerPage = 10; // تعداد آیتم‌ها در هر صفحه
  private _searchName : string = '';
  private cryptos = signal<CryptoModel[]>([]); // Signal برای ذخیره داده‌ها
  private filteredCryptos = signal<CryptoModel[]>([]); // Signal برای داده‌های فیلتر شده
  currentPage = signal<number>(1); // Signal برای صفحه فعلی
  countPages= signal<number>(1);
  searchName : WritableSignal<string>=signal<string>('');

  // جستجو بر اساس نام
  constructor(private cryptoApiService: CryptoApiService) {
    this.fetchData();
    setInterval(() => {
      this.fetchData()
    },5000);

    effect(() => {
      if(this._searchName!==this.searchName())
      {
        this.searchByName(this.searchName());
        this._searchName = this.searchName();
      }
    });
  }
  private  fetchData()
  {
    (async()=>await new Promise(resolve => setTimeout(resolve, 250)))();
    //(async ()=>await new Promise(resolve => setTimeout(resolve,250)) )();
    this.cryptoApiService.fetchCryptoData().subscribe(data => {this.setData(data);});
  }
  searchByName(query: string): void {
    const filtered = this.cryptos().filter((crypto) =>
      crypto.name.toLowerCase().includes(query.toLowerCase())
    );
    this.filteredCryptos.set(filtered);
    this.currentPage.set(1); // بازگشت به صفحه اول پس از جستجو
  }

  // مرتب‌سازی داده‌ها
  sortData(field: string, order: 'asc' | 'desc' = 'asc'): void {
    this.currentPage.update(value => value=0);
    const sorted : any[] = [...this.filteredCryptos()].sort(( a, b) => {
      const itemA=(a as any)[field];
      const itemB = (b as any)[field];
      console.log(itemA,itemB)
      if (itemA >= itemB) {
        if (itemA> itemB) return order === 'asc' ? 1 : -1;
        return 0;
      } else {
        return order === 'asc' ? -1 : 1;
      }
    });
    console.log(field, sorted)
    this.filteredCryptos.update(value =>{
      value=sorted;
      return value;
    } );

    this.currentPage.update(value => 1);
  }

  // دریافت داده‌های صفحه فعلی
  getPaginatedData(): any[] {

    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    console.log('paginated',{startIndex:startIndex , endIndex:endIndex});
    return this.filteredCryptos().slice(startIndex, endIndex);
  }

  // تغییر صفحه
  setPage(page: number): void {
    this.currentPage.update(value => value =page);
  }
  nextPage(): void {
    this.setPage(this.currentPage() + 1);
  }
  previousPage(): void {
    this.setPage(this.currentPage() - 1);
  }
  setData(data: any[]): void {
    this.cryptos.set(data);
    this.filteredCryptos.set(data);
    this.countPages.set( Math.ceil( data?.length / this.itemsPerPage));
  }
}
