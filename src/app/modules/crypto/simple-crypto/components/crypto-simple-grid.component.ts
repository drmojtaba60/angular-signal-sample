
import {Component, computed, input, InputSignal, output, signal} from '@angular/core';
import CryptoModel from '../../models/crypto.model';

@Component({
  imports: [
  ],
  selector: 'app-crypto-simple-grid',
  templateUrl:'crypto-simple-grid.component.html',
  styleUrls: ['crypto-simple-grid.component.css'],
})
export class CryptoSimpleGridComponent
{
  rows  =input<CryptoModel[]>([]);
  headers :InputSignal<{ title: string, width: string }[] | undefined> =input();
  sortChange = output<{name:string,direction:string}>();
  sortBy = signal({name:'',direction:'asc'});
   width(name:string)
   {
     return this.headers()?.find(q=>q.title===name)?.width;
   }

  sort(ev:Event,columnName: string) {
     ev.preventDefault();
     this.sortBy.set({name:columnName,direction:columnName!==this.sortBy().name ?'asc' : this.sortBy().direction==='desc' ? 'asc' : 'desc'});
    this.sortChange.emit(this.sortBy());
  }
}
