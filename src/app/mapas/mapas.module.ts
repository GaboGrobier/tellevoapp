import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapasPageRoutingModule } from './mapas-routing.module';

import { MapasPage } from './mapas.page';
import {HttpClientModule} from "@angular/common/http";
/* import {BrowserModule} from '@angular/platform-browser'; */
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import { MapCustomService } from '../service/map-custom.service';


const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapasPageRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    /* BrowserModule */
  ],
  providers: [MapCustomService],
  bootstrap: [MapasPageModule],
  declarations: [MapasPage]
})
export class MapasPageModule {}
