import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = ''
  contrasena: string = ''
  constructor() { }
  ngOnInit() {
  }
  login (){
    const {usuario, contrasena} = this;
  }

}
