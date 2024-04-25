import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserRegisterDto } from '../../models/user.model';
import { RepoUserService } from '../../services/repo.user.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="formRegister" (ngSubmit)="submit()">
      <label for="username">Username</label>
      <input id="username" type="text" formControlName="username" />
      <label for="password">Password</label>
      <input id="password" type="password" formControlName="password" />
      <button type="submit" [disabled]="formRegister.invalid">Submit</button>
    </form>
  `,
  styles: ``,
})
export class RegisterComponent {
  private repo = inject(RepoUserService);
  private state = inject(StateService);
  private fb = inject(FormBuilder);
  formRegister = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  submit() {
    this.repo.register(this.formRegister.value as UserRegisterDto);
    console.log('Register in');
  }
}
