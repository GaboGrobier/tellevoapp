import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponetsModule } from './componets/componets.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth} from '@angular/fire/auth';
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import { AngularFireModule } from '@angular/fire/compat';






@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
    ,ComponetsModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
