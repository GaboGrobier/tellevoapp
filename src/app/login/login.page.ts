import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  constructor(public toastController: ToastController, private router: Router,private database:ServiceService) { }

  ngOnInit() { }

  usuarioDB={
    email:"",
    password:"",
  }
  login() {
    let navigationExtras: NavigationExtras = {
      state: { user: this.user }

    };
    this.router.navigate(['/dashboard'], navigationExtras);
    this.presentToast("bienvenido " + this.user);

  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

    
  async ingresar(email,password){
    try {
      const user = await this.database.login(this.usuarioDB.email,this.usuarioDB.password);
      if (user) {
        const isverified = this.database.isEmailVerified(user);
        this.redireccionUsuario(isverified);
        
      }
    } catch (error) {
      console.log('Error -->',error)
      
    }
  };

  async GoogleLogin(){
    try {
      const user = await this.database.LoginGoogle();
      if (user) {
        const isverified = this.database.isEmailVerified(user);
        this.redireccionUsuario(isverified);
      }
    } catch (error) {
      console.log('Error --->', error)
      
    }
  };

  private redireccionUsuario(isverified:boolean){
    if (isverified) {
      this.router.navigate(['/dashboard'])
      this.presentToast('Bienvenido ')
      
    }else {
      this.router.navigate(['/home'])
      this.presentToast('Debe verificar su correo electronico ')
    }
  }



}
