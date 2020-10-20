import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API_URL = 'https://localhost:44344/api/ProductCategories';
  constructor(private readonly http: HttpClient) {}
  Get() {
    const url = `${this.API_URL}/GetProductCategory`;
    return this.http.get(url);
  }
}
