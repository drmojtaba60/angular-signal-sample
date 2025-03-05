import {Component} from '@angular/core';

@Component({
  imports: [
  ],
  template: `
    <h1>Crypto List</h1>
    <ul>
      <li><a href="/simple">simple way</a></li>
      <li><a href="/by-service">advanced and by service way</a></li>
    </ul>
  `
})
export class AppLayoutComponent
{
}
