import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard  {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(route, state: RouterStateSnapshot)  {
    return this.auth.user$.pipe(map(user => {
      if (user) {return true; }

      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }));
  }

}
