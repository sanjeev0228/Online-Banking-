import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Transaction } from '../transaction';
import { UserregService } from '../userreg.service';


@Component({
  selector: 'app-create-transferrequest',
  templateUrl: './create-transferrequest.component.html',
  styleUrls: ['./create-transferrequest.component.css']
})
export class CreateTransferrequestComponent implements OnInit {

  createtransferreqRef = new FormGroup({
    recipient_name:new FormControl(),
    accounttype:new FormControl(),
    accountno:new FormControl(), 
    amount:new FormControl()
  });
  constructor(public us:UserregService) { }

  ngOnInit(): void {
  }
  
  transfer()
  {
    let val=this.createtransferreqRef.value;
    console.log(val.accounttype);
    let t= new Transaction(Date.now(),val.accountno,val.recipient_name,val.amount)
    window.alert("transfer success")
    this.us.transferfund(t,sessionStorage.getItem("userid"),val.accounttype).subscribe({
        next:(value)=>{
          window.alert(value)
        },
        error:(err)=>console.log(err),
        complete:()=>console.log("user id fetched")
    })


  }

}
