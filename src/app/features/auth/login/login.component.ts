import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData:any = {};

  constructor(private _auth: AuthService, private _router: Router) { }

  //myForm: NgForm;
 
  ngOnInit() {
  }

  
  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.access_token);
        this._router.navigate(['/home']);
      },
      err => {this._auth.logoutUser()}
    ) 
  }

}