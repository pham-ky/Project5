import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
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
  constructor(private http: HttpClient, public router: Router) {}
  GetProd() {
    const url = `${this.API_URL}/GetProduct`;
    return this.http.get(url);
  }
  GetId(id){
    const url = `${this.API_URL}/GetProduct/${id}`;
    return this.http.get(url);
  }
  GetProdBy(id){
    const url=`${this.API_URL}/GetProducts ${id}`;
    return this.http.get(url);
  }
  post(url: string, obj: any) {
    const body = JSON.stringify(obj);
    let cloneHeader: any = {};
    cloneHeader['Content-Type'] = 'application/json';
    const headerOptions = new HttpHeaders(cloneHeader);
    return this.http
      .post<any>(this.API_URL + url, body, { headers: headerOptions })
      .pipe(
        map((res: any) => {
          let json = res;
          return json;
        })
      )
      .pipe(
        catchError((err: Response) => {
          return this.handleError(err);
        })
      );
  }
  public handleError(error: any) {
    this.router.navigate(['/err']);
    return observableThrowError(error);
  }
}
