import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserregService } from '../userreg.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  alert:boolean= false
  signupRef = new FormGroup({
    name: new FormControl(),
    email:new FormControl(),
    password: new FormControl(),
    phno: new FormControl(),
    address: new FormControl(),
    panno: new FormControl(),
    date: new FormControl(),
    transactionpassword: new FormControl()
 });
 msg:string=""
  

  constructor(public ur:UserregService, public router:Router) { }

  ngOnInit(): void {
  }
  signUp(){
    let reg = this.signupRef.value;
    this.ur.signup(reg).subscribe({
      next:(result:any)=>this.msg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
    this.alert=true
    this.signupRef.reset({})
    if(this.msg="User added"){
     setTimeout(() => {
       setTimeout(() => {
         this.router.navigateByUrl("/login");
       });
     }, 3000);
   }
   }
   
   closeAlert(){
     this.alert=false
   }
  }


