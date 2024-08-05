import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  getAllAccReq():Observable<any>
  {
    return this.http.get<any>("http://localhost:9090/accountrequest")
  }

  grantAcc(accountno:any):Observable<any>
  {
    return this.http.put("http://localhost:9090/grantacs/"+accountno,{responseType:"text"});
  }

  declineAcc(accountno:number):Observable<any>
  {
    return this.http.put("http://localhost:9090/blockacs/"+accountno,{responseType:"text"});
  }

  getchq():Observable<any>
  {
    return this.http.get<any>("http://localhost:9090/getchqrequest");
  }

  acceptchq(accountno:number):Observable<any>
  {
    return this.http.put("http://localhost:9090/chqstat/"+accountno,{responseType:"text"});
  }

  fetchloan():Observable<any>
  {
    return this.http.get<any>("http://localhost:9090/adgetloan");
  }

  fetchuser():Observable<any>
  {
    return this.http.get<any>("http://localhost:9090/adgetuser");
  }
  fetchtrans():Observable<any>
  {
    return this.http.get<any>("http://localhost:9090/adgettransaction");
  }
  
}
