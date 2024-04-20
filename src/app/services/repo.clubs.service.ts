import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Club } from '../models/club.model';

@Injectable({
  providedIn: 'root',
})
export class RepoClubsService {
  httpClient = inject(HttpClient);

  url = environment.apiUrl + '/clubs';

  getClubs() {
    return this.httpClient.get<Club[]>(this.url);
  }
}
