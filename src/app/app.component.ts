import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <router-outlet />
  `,
  styles: ``,
})
export class AppComponent {
  stateService = inject(StateService);

  constructor() {
    const stringToken = localStorage.getItem('W07');

    if (stringToken) {
      const { token } = JSON.parse(stringToken);
      this.stateService.setLogin(token);
    }
  }
}
