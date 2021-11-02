import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public toastController: ToastController, private authsrv:AuthService ) { }


  async registro(email, password){
    try {
      const user = await this.authsrv.register(email.value, password.value);
      if (user){
        //verificar usuario
        console.log('user --->', user)
      }
      this.presentToast()
    } catch (error) {console.log('Error ---> ',error)
      
    }
   
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
