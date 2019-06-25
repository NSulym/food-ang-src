import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidUserService {
  userData = {
    userName: 'nazar@gmail.com',
    password: '12345678'
  };

  constructor() {
  }

  valid(userName, password) {
    if (userName === this.userData.userName && password === this.userData.password) {
      return true;
    } else {
      return false;
    }
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }
}
