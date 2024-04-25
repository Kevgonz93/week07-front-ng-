import { Component, OnInit, inject } from '@angular/core';
import { State, StateService } from '../../services/state.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    @if (state.loginState === 'logging') {
    <h2>Home - Inicia sesión</h2>
    } @else if(state.loginState === 'register'){
    <h2>Home - Crea nuevo usuario</h2>
    } @switch(state.loginState){ @case ('idle'){
    <p>Esperando al usuario</p>
    } @case('logging'){
    <app-login />
    } @case('register'){
    <app-register />
    } @case('logged'){
    <p>Welcome {{ state.currentUser }}</p>
    } @case ('error'){
    <p>Error de acceso</p>
    }}
  `,
  styles: ``,
  imports: [LoginComponent, RegisterComponent],
})
export default class HomeComponent implements OnInit {
  stateService = inject(StateService);
  state!: State;

  ngOnInit() {
    this.stateService.getState().subscribe((state) => {
      this.state = state;
    });
  }
}
