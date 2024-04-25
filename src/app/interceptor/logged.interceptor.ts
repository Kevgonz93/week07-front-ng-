import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { StateService } from '../services/state.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const state = inject(StateService);
  const token = state.getToken();
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  return next(authReq);
};
