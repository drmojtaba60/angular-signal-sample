
import {Component, input,InputSignal } from '@angular/core';

@Component({
  imports: [
  ],
  selector: 'app-crypto-simple-header',
  templateUrl:'crypto-simple-header.component.html',
})
export class CryptoSimpleHeaderComponent
{
  headers :InputSignal<{ title: string, width: string }[] | undefined> =input();
}
