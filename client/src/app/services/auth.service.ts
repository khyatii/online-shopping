import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GlobalService } from './global.service';
import { Login } from '../models/login';
import { User } from '../models/user';

declare const sessionStorage: any;

@Injectable()
export class AuthService {
    headers: Headers;
    user: User;
    constructor(private http: Http, private globalService: GlobalService) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.user = new User();
        this.loadAuthInfo();
    }

    setAuthorizationHeader() {
        if (this.user.isAuth) {
            // console.log(this.user.token);
            this.headers.append('Authorization', this.user.token);
        }
    }

    clearAuthorizationHeader() {
        this.headers.delete('Authorization');
    };

    logOut() {
        sessionStorage['authInfo'] = null;
        this.clearAuthorizationHeader();

        this.user.isAuth = false;
        this.user.name = '';
        this.user.email = '';
        this.user.contact = '';
        this.user.userId = '';
        this.user.token = '';
    };
    private loadAuthInfo() {
        if (sessionStorage['authInfo'] != undefined && sessionStorage['authInfo'] != null) {
            let data = JSON.parse(sessionStorage['authInfo']);
            if (data != null) {
                this.user.email = data.email;
                this.user.name = data.name;
                this.user.userId = data.userId;
                this.user.isAuth = true;
                this.user.token = data.token;
                this.user.roles = data.roles;
            }
        }
    }
    setAuthInfo(data) {
        //console.log(data);
        if (data != undefined && data != null) {
            this.user.email = data.email;
            this.user.name = data.name;
            this.user.userId = data.userId;
            this.user.isAuth = true;
            this.user.token = data.token;
            this.user.roles = data.roles;

            sessionStorage['authInfo'] = JSON.stringify(this.user);
            this.setAuthorizationHeader();
        }
    };

    ValidateUser(user: Login): Observable<Response> {
        return this.http.post(this.globalService.apiAddress + "/auth", JSON.stringify(user),
         { headers: this.headers }).catch((err) => Observable.throw(err));
    }
    signup(user: User): Observable<Response> {
        return this.http
            .post(`${this.globalService.apiAddress}/auth/signup`, JSON.stringify(user), { headers: this.headers })
            .catch((error: any) => Observable.throw('Server error'));
    }
}