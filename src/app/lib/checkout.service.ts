import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private API_URL = 'https://localhost:44344/api/Orders';
  constructor(private readonly http: HttpClient, public router: Router) {}
  checkout(order: any): Observable<number> {
    const url = `${this.API_URL}/Add`;
    var orderString = JSON.stringify(order);
    return this.http.post<any>(url, orderString, httpOptions);
  }
  
}