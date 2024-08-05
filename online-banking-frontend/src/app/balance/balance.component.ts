import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Account } from '../account';
import { UserregService } from '../userreg.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
balRef = new FormGroup({
  accountno: new FormControl()
});
msg=""
  constructor(public us:UserregService) { }


  ngOnInit(): void {
  }
  balance(){
  
    this.us.balance(this.balRef.value.accountno).subscribe({
      next:(obj:any)=>this.msg=obj,
      error:(err)=>console.log(err),
      complete:()=>console.log("fetched")
    })  }

}
