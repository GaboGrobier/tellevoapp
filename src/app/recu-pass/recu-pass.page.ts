import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-recu-pass',
  templateUrl: './recu-pass.page.html',
  styleUrls: ['./recu-pass.page.scss'],
})
export class RecuPassPage implements OnInit {
  email:string;

  constructor(public toastController: ToastController, private database:ServiceService,private router:Router ){ }

  ngOnInit() {
  }
async EnviarCorreo(email){
  try {
    await this.database.resetpassword(email.value);
    console.log(email.value);
    this.router.navigate(['/home'])
    this.presentToast('Enlace enviado ')
  } catch (error) {
    console.log('Error ---> ', error)
    
  }
}
  
async presentToast(msg:string) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 4000
  });
  toast.present();
}

}
