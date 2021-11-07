import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private firestore:AngularFirestore ) { }
  
  async crearUsuario(coleccion,dato){
    return await this.firestore.collection(coleccion).add(dato);

  }
}
