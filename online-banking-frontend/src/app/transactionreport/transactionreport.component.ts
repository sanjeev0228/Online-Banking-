import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-transactionreport',
  templateUrl: './transactionreport.component.html',
  styleUrls: ['./transactionreport.component.css']
})
export class TransactionreportComponent implements OnInit {
trans:any
  constructor(public as:AdminService) { }

  ngOnInit(): void {
    this.fetch();
  }
  fetch()
  {
    this.as.fetchtrans().subscribe({
      next:(obj:any)=>this.trans=obj,
          error:(err)=>console.log(err),
          complete:()=>console.log("completed")
    })
  }
}
