import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm! : FormGroup;
  submitted=false;


  constructor( private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phNo: ['', [Validators.required, Validators.minLength(10)]],
      service: ['advance', [Validators.required]],
    });
  }
  signup(){
    if(this.registerForm.valid){
      let reqData={
        fullName:this.registerForm.value.fullName,
        emailId:this.registerForm.value.emailId,
        password:this.registerForm.value.password,
        phNo:this.registerForm.value.phNo,
       
        service:this.registerForm.value.service
      }
      console.log(this.registerForm.value);
      this.userService.signup(reqData).subscribe(response =>{
        console.log(response);
      },error =>{
        console.log(error);
      })  
    } 
    else{
      console.log("form is not valid, fill form correctly")
      return;
    }
    
  }
}
  
