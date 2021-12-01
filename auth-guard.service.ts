import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }
  canActivate(){
    let bReturn=true;
    if(localStorage.getItem('isLoggedIn')=='false')
    {
      alert("Sorry,you are not allowed to view this page...");
      this.router.navigate(['/home']);
      bReturn=false;
    }
    return bReturn;

  }
}
