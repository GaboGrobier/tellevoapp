import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  user: any;
  constructor(private activeroute:ActivatedRoute, private router:Router, public loadingController:LoadingController) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user=this.router.getCurrentNavigation().extras.state.user;
        
      }
    });
   }
  
  ngOnInit() {
  }
  cargando(){
    this.presentLoadingWithOptions()
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Buscando Conductores',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
