import { Component, OnInit,NgModule } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ViajeConductor } from '../Shared/user.interface';


@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {
 private path ='DatosViaje'

 public viajes:ViajeConductor[] = [];

 newDatosViaje:ViajeConductor= {
  uid: this.database.CrearID(),
  correo:'',
  fecha:new Date() ,
  destino:'',

};


  constructor(private database: ServiceService ) { }

  ngOnInit() {
    this.ObtenerinfoViaje();
  }



  ObtenerinfoViaje(){
    this.database.ObtenerColeccion<ViajeConductor>('DatosViaje').subscribe(res => {
      this.viajes=res
      console.log('Esta es la respuesta', res)
      console.log('esta es la variable viajes',this.viajes)

    });
  }
/* 
  enviarcorreo(){
    try {
      let email = {
        to: this.newDatosViaje.correo,
        subject: 'Reserva de Viaje aceptada ',
        body: 'estimado se ha aceptado un viaje  a '+ this.newDatosViaje.destino,
        isHtml: true
      };
  
      this.email.open(email);
    } catch (error) {
      console.log('error de enviar correo ----> ',error)
      
    }
  } */
   
}
