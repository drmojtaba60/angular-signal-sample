
import {Component, computed, input, InputSignal} from '@angular/core';

import CryptoModel from '../../models/sortModel';
import { SortListGridComponent} from './sort/sort-list.component';
import SortModel from '../../models/sortModel';

@Component({
  imports: [
    SortListGridComponent
  ],
  selector: 'app-crypto-simple-grid',
  templateUrl:'crypto-simple-grid.component.html',
  styleUrls: ['crypto-simple-grid.component.css'],
})
export class CryptoSimpleGridComponent
{
  rows  =input<CryptoModel[]>([]);
  headers :InputSignal<{ title: string, width: string }[] | undefined> =input();
   width(name:string)
   {
     return this.headers()?.find(q=>q.title===name)?.width;
   }

  sortChangeEventHandler($event: SortModel) {

  }
}
