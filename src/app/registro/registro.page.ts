import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public toastController: ToastController) { }


  registro(){
    this.presentToast()
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
