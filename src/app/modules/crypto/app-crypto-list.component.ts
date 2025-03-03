import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CryptoApiService} from './services/crypto.service';
import {SignalStore} from './services/store.service';
import {SearchComponent} from '../../components/search/search.component';

@Component({
  imports: [
    FormsModule,
    SearchComponent,
    // Add FormsModule here
  ],
  selector: 'app-crypto-list',
  templateUrl:'app-crypto-list.component.html',
  styleUrls: ['app-crypto-list.component.css']
})
export class AppCryptoListComponent implements OnInit
{
   searchTerm: string = '';
  constructor(public store:SignalStore) {}

  ngOnInit() {
  }
}
