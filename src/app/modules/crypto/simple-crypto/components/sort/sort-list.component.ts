
import {Component, input, OnInit, output, signal, WritableSignal} from '@angular/core';
import SortModel from '../../../models/sortModel';

@Component({
  imports: [
  ],
  selector: 'app-sort-list',
  templateUrl:'sort-list.component.html',
})
export class SortListGridComponent implements OnInit
{
  fieldName = input('');
  sortItem :WritableSignal<SortModel> =signal({fieldName:'',direction:''});// signal<SortModel>({fieldName:'', direction:'asc'});
  sortChangeEvent = output<SortModel>();
  ngOnInit(){
    this.sortItem.set({fieldName:this.fieldName(),direction:'asc'});
  }
  sortChange($event: MouseEvent) {
    $event.preventDefault();
    this.sortItem.update(value => ({...value, direction:this.sortItem().direction==='desc' ? 'asc' : 'desc'}));
    this.sortChangeEvent.emit(this.sortItem());
  }
}
