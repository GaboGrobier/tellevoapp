import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';
import { User } from '../shared/user.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@firebase/auth';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import {switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$:Observable<User>;

  constructor(private afAuth:AngularFireAuth, private afs:AngularFirestore) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user)=>{
        if (user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null)
      }
      
      )
    )
  }

  //Reseteo de passowrd 
  async ResetPAssword(email:string): Promise<void> {
    try {
     return this.afAuth.sendPasswordResetEmail(email); 
    } catch (error) {console.log('Error --> ', error)
      
    }


  }


//Logeo con google 
  async LoginGoogle(): Promise<User> {

    try {
      const{user} = await this.afAuth.signInWithPopup(new GoogleAuthProvider() );
      this.updateUserData(user);
      return user;
    } catch (error) {console.log('Error --> ', error)
      
    }
  }

//Registro 
  async register(email:string, password:string): Promise<User> {
    try {
      const {user} = await this.afAuth.createUserWithEmailAndPassword(email,password);
      await this.SendVerificationEmail();
      return user;


    } catch (error) {
      console.log('Error ---> ',error) 
    }



  }

//Login 
  async login(email: string ,password:string): Promise<User> {

    try{
      const {user} = await this.afAuth.signInWithEmailAndPassword(email,password);
      this.updateUserData(user);
      return user;

    }
    catch(error){
      console.log('Error --->',error)
    }
  }

//Logout 
  async logout(): Promise<void> {
    try{
      await this.afAuth.signOut();

    }
    catch(error){
      console.log('Error --->', error)
    }

  }


  //Enviar Verificacion 
  async SendVerificationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {console.log('Error --->', error)
      
    }
  }
private updateUserData(user:User){
  const userRef:AngularFirestoreDocument<User> = this.afs.doc(`user/${user.uid}`);
  const data:User = {
    uid:user.uid,
    email:user.email,
    emailVerified: user.emailVerified,
    displayName: user.displayName
  };

  return userRef.set(data, {merge:true});
    
}
  emailVerified(user:User):boolean{
  return user.emailVerified === true ? true : false;
}

}
