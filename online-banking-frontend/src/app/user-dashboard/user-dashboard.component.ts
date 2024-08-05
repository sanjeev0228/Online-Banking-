import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(public router:Router) { }
  userid:any
  email:any

  ngOnInit(): void {
    this.userid=sessionStorage.getItem("userid");
    this.email=sessionStorage.getItem("email");
  }

  logout(){
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userid");
    this.router.navigate(['login']);
  }
}
