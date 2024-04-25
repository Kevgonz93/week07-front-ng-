import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RepoClubsService } from './repo.clubs.service';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { RepoUserService } from './repo.user.service';
import { UserRegisterDto } from '../models/user.model';

export type UserPayload = {
  id: string;
  role: string;
} & JwtPayload;

type LoginState = 'idle' | 'register' | 'logging' | 'logged' | 'error';

export type State = {
  loginState: LoginState;
  token: string | null;
  currentPayload: UserPayload | null;
  currentUser: unknown | null;
};

const initialState: State = {
  loginState: 'idle',
  token: null,
  currentPayload: null,
  currentUser: null,
};

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state$ = new BehaviorSubject<State>(initialState);
  private repoClubs = inject(RepoClubsService);
  private repoUsers = inject(RepoUserService);

  constructor() {}

  getState(): Observable<State> {
    return this.state$.asObservable();
  }

  getToken = (): string | null => this.state$.value.token;

  setLoginStart(loginState: LoginState): void {
    this.state$.next({ ...this.state$.value, loginState });
  }

  setLogin(token: string) {
    const currentPayload = jwtDecode(token) as UserPayload;
    localStorage.setItem('W07', JSON.stringify({ token }));
    this.repoUsers.getById;

    localStorage.setItem('W07', JSON.stringify({ token }));

    this.state$.next({
      ...this.state$.value,
      loginState: 'logged',
      token,
      currentPayload,
    });
  }

  setLogout() {
    localStorage.removeItem('W07');
    this.state$.next({
      ...this.state$.value,
      loginState: 'idle',
      token: null,
      currentUser: null,
    });
  }

  loadClubs() {
    this.repoClubs.getClubs().subscribe((Club) => {
      console.log('Club');
    });
  }

  setRegister() {
    this.state$.next({
      ...this.state$.value,
      loginState: 'register',
    });
  }

  setRegisterStart(loginState: LoginState): void {
    this.state$.next({ ...this.state$.value, loginState });
  }
}
