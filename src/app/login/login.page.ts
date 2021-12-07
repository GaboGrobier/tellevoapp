import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { InteraccionUsuarioService } from '../service/interaccion-usuario.service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  constructor(public interaccion:InteraccionUsuarioService, private router: Router, private database: ServiceService) { }

  ngOnInit() { }

  usuario = new FormGroup({
    email: new FormControl("", Validators.compose([Validators.email, Validators.required])),
    password: new FormControl("", Validators.required)
  });

  usuarioDB = {
    email: "",
    password: "",
  }
  login() {
    let navigationExtras: NavigationExtras = {
      state: { user: this.user }

    };
    this.router.navigate(['/mapas'], navigationExtras);
    this.interaccion.presentToast("bienvenido " + this.user);

  }


  async ingresar(email, password) {
    try {
      const user = await this.database.login(this.usuarioDB.email, this.usuarioDB.password);
        if (user) {
          const isverified = this.database.isEmailVerified(user);
          this.redireccionUsuario(isverified);
          
        }

    } catch (error) {
      console.log('Error -->', error)
      this.interaccion.presentToast('Error de usuario o contraseña ')

    }
  };

  async GoogleLogin() {
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

  private redireccionUsuario(isverified: boolean) {
    if (isverified) {
      this.router.navigate(['/mapas'])
      this.interaccion.presentToast('Bienvenido ')

    } else {
      this.router.navigate(['/home'])
      this.interaccion.presentToast('Debe verificar su correo electronico ')
    }
  }

}
