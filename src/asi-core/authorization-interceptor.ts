import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConstantService } from './app-constants.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
    private webApiBaseUrl: string;
    private headers: { [name: string]: string | string[]; } ;

    constructor(appConstants: AppConstantService) {
        this.webApiBaseUrl = appConstants.baseUrl;
        this.headers = appConstants.headers;        
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newHeader = new HttpHeaders(this.headers);

        // Add our XSRF token and prefix our URL with the right server
        request = request.clone({
            headers: newHeader, 
            url: Location.joinWithSlash(this.webApiBaseUrl, (request.url || '')) 
        });
        return next.handle(request);
    }
}