import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
import { LoginI } from '../interfaces/login-i';
import { SharedService } from '../../services/shared.service';
import { PeopleI } from '../../people-module/interfaces/people-i';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginServiceService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor, completa todos los campos correctamente.';
      return;
    }

    this.authenticateUser();
  }

  private authenticateUser() {
    const loginData = this.loginForm.value;

    this.loginService.login(loginData).subscribe({
      next: (res: LoginI) => this.handleLoginSuccess(res),
      error: () => {
        this.errorMessage =
          'Error al iniciar sesión. Por favor, intenta de nuevo.';
      },
    });
  }

  private handleLoginSuccess(response: LoginI) {
    const { rol, userId } = response;

    this.loginService.getPeopleAuthenticated(userId).subscribe({
      next: (personAuthenticated: PeopleI) =>
        this.handleUserData(personAuthenticated, rol),
      error: () => {
        this.errorMessage = 'Error al obtener información del usuario.';
      },
    });
  }

  private handleUserData(person: PeopleI, role: string) {
    this.sharedService.setData(person);
    const route = role === 'admin' ? '/people' : '/agends';
    this.router.navigate([route]);
  }
}
