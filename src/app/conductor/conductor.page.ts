import { Component, OnInit } from '@angular/core';
import { InteraccionUsuarioService } from '../service/interaccion-usuario.service';
import { ServiceService } from '../service/service.service';
import { ViajeConductor } from '../Shared/user.interface';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  constructor(private database:ServiceService,private interaccion:InteraccionUsuarioService) { }

  newDatosViaje: ViajeConductor= {
    uid: this.database.CrearID(),
    correo:null,
    fecha:new Date(),
    destino:'',
  }

 async crearViaje(){
try {
  const viaje = await this.database.guardarviaje('DatosViaje',this.newDatosViaje)
  
  if (viaje) {
    console.log('mensjae ', viaje)
    this.interaccion.presentToast('se ha creado el viaje ')
    
  }
  
} catch (error) {
  console.log('error esta aqui ---> ', error )
}
}

  ngOnInit() {
  }

}
