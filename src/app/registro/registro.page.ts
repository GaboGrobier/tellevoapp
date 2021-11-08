import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ServiceService } from '../service/service.service';
import { FormControl,FormGroup,MinLengthValidator,Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public toastController: ToastController, private database:ServiceService) { }
  registerForm: FormGroup;

 
  

  usuario = new FormGroup({
    nombre:new FormControl("",Validators.required),
    apellido:new FormControl("",Validators.required),
    email:new FormControl("",Validators.compose([Validators.email,Validators.required])),
    password:new FormControl("",Validators.required)
  });


  usuarioDB={
    nombre:"",
    apelldio:"",
    email:"",
    password:"",
  }


  registro(){
      this.database.crearUsuario('usuarios', this.usuarioDB);
    this.presentToast( 'Estimado '+ this.usuarioDB.nombre + ' '+ this.usuarioDB.apelldio + ' usuario registrado verifique su correo '+ this.usuarioDB.email )    
  }
   async authRegistro(email, password ){
    try {
      const user = await  this.database.crearAuth(this.usuarioDB.email,this.usuarioDB.password)
      this.registro();

      if (user) {
        //verificar email 
      }
    } catch (error) {
      console.log('Error ---> ', error)
      
    }
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000
    });
    toast.present();
  }


  ngOnInit() {
  }

}
