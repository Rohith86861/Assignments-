import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor() { }
  varIsLoggedIn="isLoggedIn";
  login(){
    localStorage.setItem(this.varIsLoggedIn,'true');
    alert("is logged true");
  }
  logout(){
    localStorage.setItem(this.varIsLoggedIn,'false');
    alert("is logged false");
  }
}
