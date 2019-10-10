import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private router: Router) { }

  checkLogin(callback?): boolean {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
