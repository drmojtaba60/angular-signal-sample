import {Component, computed, OnInit, Signal, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import CryptoModel from '../models/crypto.model';
import {CryptoApiService} from '../services/crypto.service';
import {CryptoSimpleGridComponent} from './components/crypto-simple-grid.component';
import {PaginationSimpleComponent} from './components/pagination/pagination-simple.component';
import {SearchSimpleComponent} from './components/search/search-simple.component';

@Component({
  imports: [
    FormsModule,
    CryptoSimpleGridComponent,
    PaginationSimpleComponent,
    SearchSimpleComponent,
    //CryptoSimpleHeaderComponent,
    //CryptoSimpleGridComponent,
  ],
  selector: 'app-crypto-simple',
  templateUrl: 'app-crypto-simple.component.html',
  styleUrls: ['app-crypto-simple.component.css']
})
export class AppCryptoSimpleComponent implements OnInit {
  crypto = signal(
    {
      data:[],
      filteredData:[],
      name: '',
      pageSize: 15,
      pageIndex: 0,
      query: '',
      headers: [
        {title: 'rank', width: '75px'},
        {title: 'symbol', width: '85px'},
        {title: 'name', width: '50%'},
        {title: 'priceUsd', width: '95px'},
        {title: 'changePercent24Hr', width: '95px'}
      ]
    }
  );
  list: Signal<CryptoModel[]> = computed(() => {
      return this.crypto()?.filteredData?.slice(this.crypto().pageIndex, this.crypto().pageIndex + this.crypto().pageSize) ?? [];
    }
  )

  constructor(private _cryptoService: CryptoApiService) {
  }

  ngOnInit() {
    this._cryptoService.fetchCryptoData().subscribe(response => {
      this.crypto.update(value => ({
        ...value,
        data: response,
        filteredData: response,
      }));
    })
  }

  changePageEvent($event: number) {
    this.crypto.update(value => ({...value, pageIndex: ($event - 1) * this.crypto().pageSize,}));
  }
  queryNameChangeEvent($event: string) {
    console.log('queryNameChangeEvent', $event);
    this.crypto.update(value => ({...value,filteredData: this.crypto().data.filter(q=>(q as any).name.toLowerCase().includes($event.toLowerCase()) ) }));
  }
}
