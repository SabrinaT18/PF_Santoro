import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { SesionState } from '../state/sesion.reducer';
import { selectSesionActivaState } from '../state/sesion.selectors';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate, CanLoad  {

  constructor(
    private store: Store<SesionState>,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(selectSesionActivaState).pipe(
      map((sesionActiva: boolean) => {
        if (sesionActiva) {
          return true;

        } else {
          this.router.navigate(['auth/login']);
          return false;
        }
      })
    );
  };

  canLoad(
    route: Route,    
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(selectSesionActivaState).pipe(
      map((sesionActiva: boolean) => {
        if (sesionActiva) {
          return true;
        } else {
          this.router.navigate(['auth/login']);
          return false;
        }
      })
    );
  };


}