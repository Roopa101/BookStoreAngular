import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;
  constructor( private httpService:HttpService) {
    this.token= localStorage.getItem("token")
   }
   signup(data:any){
    let header = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
   }
    console.log("signup called in user service",data);
    return this.httpService.postService('User/UserRegistration',data,false,header)
  }
}

