import { Category } from '../../models/category';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { GlobalService } from '../../services/global.service';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class CategoryService {
    private baseUrl = '';
    private headers: Headers;
    private options;
    constructor(private http: Http, private globalService: GlobalService, private authService: AuthService) {
        //console.log(this.authService.user.token);
        this.headers = new Headers({ 'Content-Type': 'application/json'});
        this.options = new RequestOptions({headers: new Headers({'authorization':this.authService.user.token})});

        this.baseUrl = globalService.apiAddress;
        //console.log(this.options);
    }

    getAll(): Observable<Category[]> {
        return this.http.get(`${this.baseUrl}/category`,this.options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    get(id: number): Observable<Category> {
        return this.http
            .get(`${this.baseUrl}/category/${id}`)
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw('Server error'));
    }
    add(category: Category): Observable<Response> {

        return this.http
            .post(`${this.baseUrl}/category`, JSON.stringify(category), { headers: this.headers })
            .catch((error: any) => Observable.throw('Server error'));
    }
    update(category: Category): Observable<Response> {
        return this.http
            .put(`${this.baseUrl}/category/${category._id}`, JSON.stringify(category), { headers: this.headers })
            .catch((error: any) => Observable.throw('Server error'));
    }
    delete(id: number): Observable<Response> {
        return this.http
            .delete(`${this.baseUrl}/category/${id}`)
            .catch((error: any) => Observable.throw('Server error'));
    }
}
