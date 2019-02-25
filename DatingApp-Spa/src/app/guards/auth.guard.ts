import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AuthService } from './../services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService) {

  }
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.alertify.error('You shall not pass!!!');
    this.router.navigate(['/home']);
    return false;
  }
}
