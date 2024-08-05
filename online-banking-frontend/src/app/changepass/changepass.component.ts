import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';
import { UserregService } from '../userreg.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  passRef = new FormGroup({
    password: new FormControl()
  });

  constructor(public us:UserregService) { }
email:any
  ngOnInit(): void {

  if(sessionStorage.getItem("email")!=null)
    {
      this.email=sessionStorage.getItem("email");
    }
  }
  update(){
    let u = new User(0,"",this.email,this.passRef.value.password,"","",0,0);
    console.log(this.passRef.value.password);
    this.us.changepass(u).subscribe({
      next:(obj:any)=>window.alert(obj),
      error:(err)=>console.log(err),complete:()=>console.log("completed")
    })
  }
  }

 
