import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserregService } from '../userreg.service';

@Component({
  selector: 'app-create-withdrawlrequest',
  templateUrl: './create-withdrawlrequest.component.html',
  styleUrls: ['./create-withdrawlrequest.component.css']
})
export class CreateWithdrawlrequestComponent implements OnInit {
  withdrawRef = new FormGroup({
    accountno: new FormControl(),
    balance: new FormControl(),
  });
  msg:string=""

  constructor(public ws: UserregService) { }

  ngOnInit(): void {
  }
  withdraw(){
    let witd = this.withdrawRef.value;
    this.ws.withdraw(witd).subscribe({
      next:(result:any)=>this.msg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")

    })
  }

}
