import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanLoad {

  constructor(private router: Router) { }

  canLoad(route: Route, segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    if (sessionStorage.getItem('user') || localStorage.getItem('user')) {
      this.router.navigateByUrl('/home');
      return false;
    } else {
      return true;
    }
  }
  
}
