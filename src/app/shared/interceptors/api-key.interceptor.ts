import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(ApiKeyInterceptor.setApiKeyAsParam(req));
  }

  private static setApiKeyAsParam(req: HttpRequest<any>): HttpRequest<any> {
    if (!req.params.has('appid')) {
      return req.clone({
        setParams: {
          appid: environment.apiKey
        }
      });
    }

    return req;
  }
}
