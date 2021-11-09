import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  @ViewChild('map') mapView: ElementRef;
  user: any;
  constructor(private activeroute:ActivatedRoute, private router:Router, public loadingController:LoadingController,public alertController: AlertController) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user=this.router.getCurrentNavigation().extras.state.user;
        
      }
    });
   }

  ionViewDidEnter(){
    this,this.createmap()

  }
  createmap(){
    const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;
    CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.width),
      x: Math.round(boundingRect.x),
      y:Math.round(boundingRect.y),
      zoom:5,
    });
    CapacitorGoogleMaps.addListener('onMapReady',async () => {
      CapacitorGoogleMaps.setMapType({
        type:'normal'

      })

    })
  }
  
  


  ngOnInit() {
  }
  cargando(){
    this.presentLoadingWithOptions() 
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Lo sentimos',
      message: 'No encontramos conductores en la zona que buscas ',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: "circles",
      duration: 5000,
      message: 'Buscando Conductores',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
   await loading.present();
   const { role, data } = await loading.onDidDismiss();
   this.presentAlert()
   return;

    
  }

}
