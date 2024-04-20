import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserLoginDto } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepoUserService {
  httpClient = inject(HttpClient);
  url = environment.apiUrl + '/users';

  login(_data: UserLoginDto) {
    const data = {
      name: _data.name,
      password: _data.password,
    };
    return this.httpClient.post<{ token: string }>(this.url + '/login', data);
  }

  getById(id: string) {
    return this.httpClient.get;
  }
}
