import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuPassPageRoutingModule } from './recu-pass-routing.module';

import { RecuPassPage } from './recu-pass.page';
import { ComponentsModule } from '../componets/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuPassPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecuPassPage]
})
export class RecuPassPageModule {}
