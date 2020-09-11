import { Product } from '../../models/product';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { GlobalService } from '../../services/global.service';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class ProductService {
  private baseUrl = '';
  private headers: any;
  private options;
  constructor(private http: Http, private globalService: GlobalService, private authService: AuthService) {
   // this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: new Headers({ 'authorization': this.authService.user.token,'Content-Type': 'application/json' }) });
    this.baseUrl = globalService.apiAddress;
  }

  getAll(): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}/product`,this.options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  get(id: string): Observable<Product> {
    return this.http
      .get(`${this.baseUrl}/product/${id}`,this.options)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw('Server error'));
  }
  add(product: Product): Observable<Response> {

    return this.http
      .post(`${this.baseUrl}/product`, JSON.stringify(product), this.options)
      .catch((error: any) => Observable.throw('Server error'));
  }
  update(product: Product): Observable<Response> {
    return this.http
      .put(`${this.baseUrl}/product/${product._id}`, JSON.stringify(product), { headers: this.headers })
      .catch((error: any) => Observable.throw('Server error'));
  }
  delete(id: string): Observable<Response> {
    return this.http
      .delete(`${this.baseUrl}/product/${id}`)
      .map((res: Response) => {
        return res;
      })
      .catch((error: any) => Observable.throw('Server error'));
  }
}
