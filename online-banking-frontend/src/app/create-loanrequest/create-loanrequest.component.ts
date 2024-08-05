import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Loan } from '../loan';
import { UserregService } from '../userreg.service';

@Component({
  selector: 'app-create-loanrequest',
  templateUrl: './create-loanrequest.component.html',
  styleUrls: ['./create-loanrequest.component.css']
})
export class CreateLoanrequestComponent implements OnInit {
  createloanreqRef= new FormGroup({
    account:new FormControl(),
  accounttype:new FormControl(),
  type:new FormControl(),
  amount:new FormControl(),
  tenure:new FormControl(),
  interest:new FormControl()

})
  constructor(public us:UserregService) { }

  ngOnInit(): void {
  }

  applyloan()
  {
    let val=this.createloanreqRef.value;
    let l=new Loan(Date.now(),val.type,val.amount,val.tenure,val.interest);
    console.log(val.accounttype)
    console.log(val.interest)
    console.log(val.account)
    this.us.addloan(l,val.account).subscribe({
      next:(value)=>{
        window.alert(value)
      },
      error:(err)=>console.log(err),
      complete:()=>console.log("completed")

    })
  }

}
