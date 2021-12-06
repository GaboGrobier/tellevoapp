import { Component,  OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import * as Leaflet from 'leaflet';
import {  OnDestroy } from '@angular/core';
import { antPath } from 'leaflet-ant-path';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  

  map:any;

  constructor(private activeroute:ActivatedRoute, private router:Router, public loadingController:LoadingController,public alertController: AlertController,private afs:AngularFirestore) {
    

  }
  ngOnInit() {}

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([28.644800, 77.216721], 5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);

    Leaflet.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi').openPopup();
    Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();

    antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
      { color: '#FF0000', weight: 5, opacity: 0.6 })
      .addTo(this.map);
  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map.remove();
  }



  cargando(){
    this.presentLoadingWithOptions() 
  }


  ngAfterViewInit() {

    this.map = new Leaflet.Map("map").setView([-25.429397, -49.271165], 10);
    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: 'Map Test'
        }).addTo(this.map);

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
