import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor(public as:AdminService) { }
  accounts:any
  ngOnInit(): void {
    this.fetch();
  }
  fetch()
  {
    this.as.getAllAccReq().subscribe({
      next:(obj:any)=>this.accounts=obj,
      error:(err)=>console.log(err),
      complete:()=>console.log("completed")
    })
  }

  approve(accountno:any)
  {
    this.as.grantAcc(accountno).subscribe({
      next:(obj:any)=>window.alert(obj),
      error:(err)=>console.log(err),
      complete:()=>console.log("completed")
    })
  }

  decline(accountno:number)
  {
    this.as.declineAcc(accountno).subscribe({
      next:(obj:any)=>window.alert(obj),
      error:(err)=>console.log(err),
      complete:()=>console.log("completed")
  })
  }
}
