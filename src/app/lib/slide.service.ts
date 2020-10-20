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
export class SlideService {

  private API_URL = 'https://localhost:44344/api/Slides';
  constructor(private readonly http: HttpClient) {}
  GetSlide() {
    const url = `${this.API_URL}/GetSlide`;
    return this.http.get(url);
  }
}
