import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  constructor(public toastController: ToastController, private router:Router)  { }

  ngOnInit() {}

  userdashboard(){
    let navigationExtras:NavigationExtras={
      state:{user: this.user}

    };
    this.router.navigate(['/dashboard'],navigationExtras);
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
