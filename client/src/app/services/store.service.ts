import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Cart } from '../models/cart';
import { GlobalService } from './global.service';
import { Product } from '../models/product';

@Injectable()
export class StoreService {
    private baseUrl = '';
    private headers: any;
    constructor(private http: Http, private globalService: GlobalService) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.baseUrl = globalService.apiAddress;
    }
    getProducts(): Observable<Product[]> {
        return this.http.get(`${this.baseUrl}/store`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    saveCart(cart: Cart): Observable<Response> {
        return this.http
            .post(`${this.baseUrl}/store/cart`, JSON.stringify(cart), { headers: this.headers })
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw('Server error'));
    }
}
