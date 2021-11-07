import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public toastController: ToastController, private database:ServiceService) { }

  usuario={
    nombre:"",
    apellido:"",
    email:"",
    password:""
  }


  registro(){
    this.database.crearUsuario('usuarios', this.usuario);
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Registro Realizado",
      duration: 2000
    });
    toast.present();
  }


  ngOnInit() {
  }

}
