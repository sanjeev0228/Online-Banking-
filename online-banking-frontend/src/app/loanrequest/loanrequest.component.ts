import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-loanrequest',
  templateUrl: './loanrequest.component.html',
  styleUrls: ['./loanrequest.component.css']
})
export class LoanrequestComponent implements OnInit {
loans:any
  constructor(public as:AdminService) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch()
  {
    this.as.fetchloan().subscribe({
      next:(obj:any)=>this.loans=obj,
          error:(err)=>console.log(err),
          complete:()=>console.log("completed")
    })
  }
}
