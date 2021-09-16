import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HeaderComponent } from '../componets/header/header.component';
import { ComponetsModule } from '../componets/componets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ComponetsModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
