import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserregService } from '../userreg.service';

@Component({
  selector: 'app-create-chequerequest',
  templateUrl: './create-chequerequest.component.html',
  styleUrls: ['./create-chequerequest.component.css']
})
export class CreateChequerequestComponent implements OnInit {
  chqRef = new FormGroup({
    cheque: new FormControl(),
    accountno: new FormControl()
  });

  msg:string=""
  constructor(public crs:UserregService) { }

  ngOnInit(): void {
  }
  request(){
    let req = this.chqRef.value;
    this.crs.chqrequest(req).subscribe({
      next:(result:any)=>this.msg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }


}
