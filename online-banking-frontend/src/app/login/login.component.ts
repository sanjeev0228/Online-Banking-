import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserregService } from '../userreg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginRef = new FormGroup({
  email : new FormControl(),
  password: new FormControl()
});
 

msg:string = ""
  constructor(public lgs:UserregService, public router:Router) { }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
  }
  signIn(){
    let login = this.loginRef.value;
    let admin = "admin@gmail.com";
    console.log(login);
    if(login.email === admin){
      this.lgs.signinadmin(login).subscribe({
        next:(result:any)=>{
          console.log(result);
          sessionStorage.setItem("email",login.email);
          if(result=="successful"){
            this.router.navigate(["admindashboard"])
          }else{
            this.msg=result;
          }
        },
        error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
      })
    }else{
      this.lgs.signinuser(login).subscribe({
        next:(result:any)=>{
          console.log(result);
          sessionStorage.setItem("email",login.email);
          if(result=="successful"){
            this.lgs.getid(login.email).subscribe({
              next:(value)=>{
                sessionStorage.setItem("email",login.email);
                sessionStorage.setItem("userid",value);
              },
              error:(err)=>console.log(err),
              complete:()=>console.log("Id Fetched")})
            this.router.navigate(["userdashboard"])
          }else{
            this.msg=result;
          }
        },
        error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
      })
    }
  }

}
