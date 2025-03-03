import { Routes } from '@angular/router';
import {AppCryptoListComponent} from './modules/crypto/app-crypto-list.component';
import {AppCryptoSimpleComponent} from './modules/crypto/simple-crypto/app-crypto-simple.component';
import {AppLayoutComponent} from './modules/layout/app-layout.component';

export const routes: Routes = [
  {path: '', component:AppLayoutComponent,},
  { path: 'by-service', component: AppCryptoListComponent },
  {path:'simple', component: AppCryptoSimpleComponent},
];
