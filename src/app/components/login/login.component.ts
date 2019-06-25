import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ValidUserService} from '../../services/valid-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  attemptLogin: FormGroup;

  constructor(private router: Router, private validUser: ValidUserService) {
  }

  ngOnInit() {
    this.attemptLogin = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16)
      ])
    });
  }

  onSubmit() {
    const user = this.attemptLogin.controls.userName.value;
    const pass = this.attemptLogin.controls.password.value;
    console.log(this.attemptLogin);
    if (this.validUser.valid(user, pass)) {
      localStorage.setItem('token', 'testToken123');
      this.router.navigate(['']);
    }
  }

  fastLogin() {
    this.attemptLogin.patchValue({
      userName: 'nazar@gmail.com',
      password: '12345678'
    });
  }
}
