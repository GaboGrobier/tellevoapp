import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { getIdToken, GoogleAuthProvider } from 'firebase/auth';
import { Observable, of } from 'rxjs';
import { User } from '../Shared/user.interface';
import {switchMap} from 'rxjs/operators'
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public user$:Observable<User>;



 


  constructor(private firestore:AngularFirestore ,private afauth:AngularFireAuth,private router:Router) {
    this.user$ = this.afauth.authState.pipe(
      switchMap((user)=> {
        if (user) {
          return this.firestore.doc<User>('usuarios/${user.uid}').valueChanges()
        }
        return of(null); 
      })
    )
  }
  

  obtenerDatosViaje(path:string, id: string){
    const coleccion = this.firestore.collection(path)
    return coleccion.doc(id).valueChanges();
  }

  ObtenerColeccion<tipo>(path:string){
    const colecionDB =this.firestore.collection<tipo>(path);
    return colecionDB.valueChanges();
  }
  


  CrearID(){
    return this.firestore.createId();
  }


  async crearUsuario(coleccion,dato){
    try {
      return await this.firestore.collection(coleccion).add(dato);
    } catch (error) {
      console.log('error --->', error) 
    }
    
  }

 isEmailVerified (user:User): boolean {
  return user.emailVerified === true ? true: false; 
}


async guardarviaje(coleccion,dato){
  try {
    return await this.firestore.collection(coleccion).add(dato);
  } catch (error) {
    console.log('error --->', error) 
  }

}





async crearAuth(email,password): Promise<User>{
  try {
  const {user}= await this.afauth.createUserWithEmailAndPassword(email,password);
  this.sendEmailVerification();
  return user;
    
  } catch (error) {
    console.log('Error ----> ', error)
  }

}
async sendEmailVerification ():Promise<void>{
  try {
    return(await this.afauth.currentUser).sendEmailVerification();
  } catch (error) {console.log('Error ---->', error)
    
  }
}


async LoginGoogle():Promise<User>{
  try {
    const {user} = await this.afauth.signInWithPopup(new GoogleAuthProvider());
    this.updateUserData(user);
    return user;
  } catch (error) {
    console.log('Error --> ', error)
    
  }
};



async resetpassword (email):Promise<void>{
  try {
    return this.afauth.sendPasswordResetEmail(email);
  } catch (error) {
    console.log('Error ----> ', error)
    
  }
}

  async getid(){
  const user = await this.afauth.currentUser;
  if (user) {
    return user.uid;
    
  }else{
    console.log('error ---> en getid')
  }
}

 async logout(): Promise<void>{
   try {
     await this.afauth.signOut();
   } catch (error) {console.log('Error --->',error)
     
   }
 }
 async login(email,password): Promise<User>{
    try {
     const {user} = await this.afauth.signInWithEmailAndPassword(email,password)
     this.updateUserData(user);
     return user;
    } catch (error) {console.log('error --->', error)
      
    }
 }

 private updateUserData(user:User){
   const userRef:AngularFirestoreDocument<User>=this.firestore.doc('usuarios/${user.uid}');
   const data:User={
     uid:user.uid,
     email:user.email,
     emailVerified:user.emailVerified,
     displayName:user.displayName
   };
   return userRef.set(data, {merge:true});  
 }

estadoUsuario(){
  return this.afauth.authState
};

}


function switchmap(switchmap: any) {
  throw new Error('Function not implemented.');
}

