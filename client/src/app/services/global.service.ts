import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';

@Injectable()
export class GlobalService {
    apiAddress: string;
    baseAddress: string;
    cartName: string;
    paymentGatewayUrl: string;
    successUrl: string;
    failedUrl: string;
    key: string;
    salt: string;
    constructor() {
        this.apiAddress = env.apiAddress;
        this.baseAddress = env.baseAddress;
        this.cartName = env.cartName;

        this.paymentGatewayUrl = env.paymentGatewayUrl;
        this.successUrl = env.successUrl;
        this.failedUrl = env.failedUrl;
        this.key = env.key;
        this.salt = env.salt;
    }
}