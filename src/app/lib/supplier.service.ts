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
export class SupplierService {

  private API_URL = 'https://localhost:44344/api/Suppliers';
  constructor(private readonly http: HttpClient) {}
  GetSup() {
    const url = `${this.API_URL}/GetSupplier`;
    return this.http.get(url);
  }
}
