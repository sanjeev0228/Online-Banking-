import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { UserregService } from '../userreg.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  alert:boolean= false
  accountRef = new FormGroup({
    accounttype: new FormControl(),
    balance: new FormControl()
  });
  
 msg:string=""
 accountno = Date.now();


  constructor(public ca:UserregService, public router:Router) { }

  ngOnInit(): void {
  }
  createAccount(){
    let acc = this.accountRef.value;
    console.log(acc.accounttype);

    let a = new Account(this.accountno,acc.balance,acc.accounttype);
    this.ca.createaccount(sessionStorage.getItem("userid"),a).subscribe({
    next:(result:any)=>this.msg=result,
    error:(error:any)=>console.log(error),
    complete:()=>console.log("completed")

    })
    if(this.msg="Account Created Successfully"){
      this.alert=true
   this.accountRef.reset({})
 
     
    }else{
      this.msg;
    }
  }
  closeAlert(){
    this.alert=false
  }
 

}