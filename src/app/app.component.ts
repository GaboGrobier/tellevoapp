import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { environment, googlemaps } from '../environments/environment';
import { InteraccionUsuarioService } from './service/interaccion-usuario.service';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  login: boolean = false;

  constructor(private auth:ServiceService, private interaccion:InteraccionUsuarioService,private route:Router) {

    this.auth.estadoUsuario().subscribe(res =>{
      if (res) {
        console.log('estas logeado')
        this.login=true;
      }
      else{'no esta logeado '}
      this.login=false;
    });
    
  }

  exit(){
    this.auth.logout()
    this.interaccion.presentToast('se ha cerrado sesion con exito ')
    this.route.navigate(['/login'])
  }
  

}
