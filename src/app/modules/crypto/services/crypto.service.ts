import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoApiService {
  private apiUrl = 'https://api.coincap.io/v2/assets';
  constructor(private http: HttpClient) {}
  // دریافت داده‌ها از API
  fetchCryptoData() {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.data)
    );

  }
}
