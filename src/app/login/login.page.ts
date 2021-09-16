import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  constructor(public toastController: ToastController) { }
  ngOnInit() {}
  bienvenida(){
    this.presentToast("bienvenido "+ this.user);

  }

async presentToast(msg:string) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}




}
