import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-checquebookrequest',
  templateUrl: './checquebookrequest.component.html',
  styleUrls: ['./checquebookrequest.component.css']
})
export class ChecquebookrequestComponent implements OnInit {
  cheques:any
  constructor(public as:AdminService) { }

  ngOnInit(): void {
    this.fetch();
  }

    fetch()
    {
      this.as.getchq().subscribe(
        {
          next:(obj:any)=>this.cheques=obj,
          error:(err)=>console.log(err),
          complete:()=>console.log("completed")
        }
      )
    }

    accept(account:number)
    {
      this.as.acceptchq(account).subscribe(
        {
          next:(obj:any)=>console.log(obj),
          error:(err)=>console.log(err),
          complete:()=>console.log("completed")
        })
    }

}
