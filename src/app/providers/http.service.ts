import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Product } from '../interfaces/Product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public API = 'http://localhost:3000/User';
  public api = 'http://localhost:3000/Product';

  constructor(private http: HttpClient) { }

  postIfPr(info: Product): any {
    return this.http.post<Product>(this.api, info, httpOptions);
  }

  getProduct(): any {
    return this.http.get(this.api);
  }

  getUser(): any {
    return this.http.get(this.API);
  }
}
