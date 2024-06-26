import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { UserStorageService } from "../services/user-storage.service";
import { inject } from "@angular/core";
import { Observable } from "rxjs";

export const AuthTokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const userStorageService = inject(UserStorageService);
  const token = userStorageService.getToken();
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        "Authorization": `Bearer ${token}`
      },
    });
    return next(cloned);
  } else {
    return next(req);
  }
};