import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  users:any
  constructor(public as:AdminService) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch()
  {
    this.as.fetchuser().subscribe({
      next:(obj:any)=>this.users=obj,
          error:(err)=>console.log(err),
          complete:()=>console.log("completed")
    })
  }
}
