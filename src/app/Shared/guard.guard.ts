import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take,map } from 'rxjs/operators';
import { ServiceService } from '../service/service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private database:ServiceService,private route:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.database.user$.pipe(
      take(1),
      map(user => {
        if (user) {
          return true;  
        }
        else{
          this.route.navigate(['/home'])
          alert('no tienes permisos , debes logearte')
          return false;

        }
      })
    )
  }
  
}
