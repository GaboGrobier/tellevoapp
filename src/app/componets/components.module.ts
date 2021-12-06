import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [HeaderComponent,BannerComponent,MenuComponent],
  exports:[HeaderComponent,BannerComponent,MenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
