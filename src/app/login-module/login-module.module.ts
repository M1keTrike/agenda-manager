import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginModuleRoutingModule } from './login-module-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [CommonModule, LoginModuleRoutingModule, ReactiveFormsModule],
})
export class LoginModuleModule {}
