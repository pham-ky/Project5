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
export class ProductService {

  private API_URL = 'https://localhost:44344/api/Products';
  constructor(private readonly http: HttpClient) {}
  GetProd() {
    const url = `${this.API_URL}/GetProduct`;
    return this.http.get(url);
  }
  GetId(id){
    const url = `${this.API_URL}/GetProduct/${id}`;
    return this.http.get(url);
  }
  GetProdBy(id){
    const url=`${this.API_URL}/GetProducts/${id}`;
    return this.http.get(url);
  }
}
