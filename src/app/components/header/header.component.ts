import { Component, inject } from '@angular/core';
import { StateService } from '../../services/state.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <header>
      <h1>
        <span> Week 07 </span>
        @if((stateService.getState() | async)!.loginState === 'logged'){
        <button (click)="onClickLogout()">Logout</button>
        <button (click)="onClickArticles()">Artículos</button>
        } @else{<button (click)="onClickLogin()">
          {{
            (stateService.getState() | async)!.loginState === 'logged'
              ? 'logout'
              : 'login'
          }}}
        </button>
      </h1>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  stateService = inject(StateService);

  onClickLogin() {
    this.stateService.setLoginStart('logging');
  }

  onClickLogout() {
    this.stateService.setLogout();
  }

  onClickArticles() {
    this.stateService.loadArticles();
  }
}
