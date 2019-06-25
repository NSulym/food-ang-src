import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ValidUserService} from './valid-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private validUser: ValidUserService) {
  }

  canActivate() {
    if (this.validUser.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
