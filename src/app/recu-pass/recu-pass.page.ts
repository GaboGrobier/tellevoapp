import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recu-pass',
  templateUrl: './recu-pass.page.html',
  styleUrls: ['./recu-pass.page.scss'],
})
export class RecuPassPage implements OnInit {
  user:string;

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }
  EnviarCorreo(){
    this.presentToast("Estimado "+ this.user + " correo electronico enviado , si no ha llegado revise la bandeja spam");
  }
  
async presentToast(msg:string) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 4000
  });
  toast.present();
}

}
