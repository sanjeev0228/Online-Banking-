import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';
import { Userregister } from './userregister';

@Injectable({
  providedIn: 'root'
})
export class UserregService {
  baseURL:string = "http://localhost:9090";

  constructor(public http:HttpClient) { }

  signup(Userregister: any):Observable<string>{
    return this.http.post(this.baseURL+"/adduser",Userregister,{responseType:"text"});
  }

  signinuser(login:any):Observable<string>{
    return this.http.post(this.baseURL+"/ulog",login,{responseType:"text"});
  }
  signinadmin(login:any):Observable<string>{
  return this.http.post(this.baseURL+"/adlog",login,{responseType:"text"});  
  }

  getid(email:any):Observable<string>
  {
    return this.http.get("http://localhost:9090/getid/"+email,{responseType:"text"});
  }

  createaccount(userid:any,account:any):Observable<string>
  {
    return this.http.patch(this.baseURL+"/createaccount/"+userid,account,{responseType:"text"});
  }

  deposit(Deposit:any):Observable<string>{
    return this.http.put(this.baseURL+"/deposit",Deposit,{responseType:"text"});
  }
  withdraw(Deposit:any):Observable<string>{
    return this.http.put(this.baseURL+"/withdraw",Deposit,{responseType:"text"});
  }
  
  chqrequest(Cheque:any):Observable<string>{
    return this.http.put(this.baseURL+"/apchq",Cheque,{responseType:"text"});
  }
  updateuser(User:any):Observable<string>{
    return this.http.patch(this.baseURL+"/cdet",User,{responseType:"text"});
  }
  changepass(User: any):Observable<string>{
    return this.http.put(this.baseURL+"/cpass",User,{responseType:"text"});
  }
  balance(Account: any):Observable<String>{
    return this.http.get(this.baseURL+"/primbal/"+Account,{responseType:"text"});
  }
  //nirmal
  userLogin(user:any):Observable<string>
  {
    return this.http.post("http://localhost:9090/ulog",user,{responseType:"text"});
  }

  transferfund(t:any,userid:any,accounttype:any):Observable<any>
  {
    return this.http.patch("http://localhost:9090/fundtransfer/"+userid+"/"+accounttype,t,{responseType:"text"});
}

  addloan(l:any,accounno:any):Observable<any>
  {
    return this.http.patch("http://localhost:9090/addloan/"+accounno,l,{responseType:"text"});

  }
}
