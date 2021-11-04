import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recu-pass',
  templateUrl: './recu-pass.page.html',
  styleUrls: ['./recu-pass.page.scss'],
})
export class RecuPassPage implements OnInit {
  email:string;

  constructor(public toastController: ToastController, private authsrv:AuthService, private router:Router ) { }

  ngOnInit() {
  }
 async EnviarCorreo(email){
    try {
      await this.authsrv.ResetPAssword(email.value);
      this.router.navigate(['/home']);
      this.presentToast("Estimado  correo electronico enviado, a  si no ha llegado revise la bandeja spam");
    } catch (error) {console.log('Error ---> ', error)
      
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
