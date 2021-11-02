import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';
import { user } from 'rxfire/auth';
import { DashboardPage } from '../dashboard/dashboard.page';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  constructor(public toastController: ToastController, private router:Router,private authsrv:AuthService)  { }

  ngOnInit() {}

  async userdashboard(email, password){
    try {
      //console.log('email', email),
      //console.log('password',password)
      //validar si esta verificado
      const user = await this.authsrv.login(email.value,password.value);
      if (user) {
        const isVerified =this.authsrv.emailVerified(user);
        this.redirect_user(isVerified);
        console.log('es verificado', isVerified)  
      }
      
    } catch (error) { console.log('Error ---> ',error)
      
    }
  }
   

async presentToast(msg:string) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 3000
  });
  toast.present();
}

async LoginGoogle (){
  try {
    const user = await this.authsrv.LoginGoogle();
    if (user) { 
      const isVerified =this.authsrv.emailVerified(user);
      this.redirect_user(isVerified);
      console.log('es verificado', isVerified)
    }
  } catch (error) {console.log('Error ---> ', error)
    
  }
}
private redirect_user(isVerified:boolean){
  if (isVerified == true) {
    this.router.navigate(['/dashboard']);
    this.presentToast("bienvenido" + user)
    
  }else{
    this.router.navigate(['/login']);
    this.presentToast("Debes Verificar tu correo primero ")
    
  }
}



}
