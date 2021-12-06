import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteraccionUsuarioService {
  loading:any;


  constructor(public toastController: ToastController,public esperar:LoadingController) { }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
     }
   async presentLoading(mensaje:string) {
    this.loading = await this.esperar.create({
      cssClass: 'my-custom-class',
      message: mensaje,

    });
    await this.loading.present();
  }

  async CerrarLoading() {
    await this.loading.dismiss();
    };
   
}
