import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';
import { UserregService } from '../userreg.service';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {
updateRef = new FormGroup({
  email: new FormControl(),
  phno: new FormControl(),
  address: new FormControl()

});
  constructor(public us:UserregService) { }
  userid:any
  ngOnInit(): void {
    if(sessionStorage.getItem("userid")!=null)
    {
      this.userid=sessionStorage.getItem("userid");
    }
  }
  update(){
    let val=this.updateRef.value;
    let u = new User(this.userid,"",val.email,"",val.address,"",val.phno,0);
    this.us.updateuser(u).subscribe({
      next:(obj:any)=>window.alert("updated"),
      error:(err)=>console.log(err),complete:()=>console.log("completed")
    })
  }

}
