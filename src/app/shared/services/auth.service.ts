import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import {environment} from '../../../environments/environment';
//import * as decode from 'jwt-decode';
//import * as jwt_decode from 'jwt-decode';
import jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient,  private _router: Router ) { }
 
  loginUser(user:any) {
    return this.http.post<any>(environment.apiUrl+'/auth/login', user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/auth/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  isTuteur(){
    const token = localStorage.getItem('token');
    if(token){
    const tokenPayload = jwt_decode(token);
    let type=tokenPayload['type'];
    if(type=='tuteur')
     return true;
     else
     return false;
    }
    return false;
  }
  isClient(){
    const token = localStorage.getItem('token');
    if(token){
    const tokenPayload = jwt_decode(token);
    let type=tokenPayload['type'];
    if(type=='client')
     return true;
     else
     return false;
    }
    return false;
  }




}
