import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserregService } from '../userreg.service';

@Component({
  selector: 'app-create-deposite',
  templateUrl: './create-deposite.component.html',
  styleUrls: ['./create-deposite.component.css']
})
export class CreateDepositeComponent implements OnInit {
  depositRef = new FormGroup({
    accountno: new FormControl(),
    balance: new FormControl()
  })
 msg:string=""
  constructor(public ds:UserregService) { }

  ngOnInit(): void {
  }
  deposit(){
    let depo = this.depositRef.value;
    this.ds.deposit(depo).subscribe({
      next:(result:any)=>this.msg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }

}
