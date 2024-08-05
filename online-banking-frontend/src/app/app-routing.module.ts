import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllusersComponent } from './allusers/allusers.component';
import { ApproveComponent } from './approve/approve.component';
import { BalanceComponent } from './balance/balance.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { ChecquebookrequestComponent } from './checquebookrequest/checquebookrequest.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateChequerequestComponent } from './create-chequerequest/create-chequerequest.component';
import { CreateDepositeComponent } from './create-deposite/create-deposite.component';
import { CreateLoanrequestComponent } from './create-loanrequest/create-loanrequest.component';
import { CreateTransferrequestComponent } from './create-transferrequest/create-transferrequest.component';
import { CreateWithdrawlrequestComponent } from './create-withdrawlrequest/create-withdrawlrequest.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TransactionreportComponent } from './transactionreport/transactionreport.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminpwComponent} from '../app/adminpw/adminpw.component';

const routes: Routes = [
  {path:"admindashboard",component:AdminDashboardComponent, children:[
    {path:"transactions",component:TransactionreportComponent},
    {path:"loanrequests",component:LoanrequestComponent},
    {path:"allusers",component:AllusersComponent},
    {path:"approveaccounts",component:ApproveComponent},
    {path:"chequebookrequests",component:ChecquebookrequestComponent},
    
  ]},
  {path:'adminpw',component:AdminpwComponent},
  {path:"userdashboard",component:UserDashboardComponent},
  {path:"createaccount",component:CreateAccountComponent},
  {path:"createchequerequest",component:CreateChequerequestComponent},
  {path:"createdeposite",component:CreateDepositeComponent},
  {path:"loanrequest",component:CreateLoanrequestComponent},
  {path:"balance",component:BalanceComponent},
  {path:"updatedetails", component:UpdatedetailsComponent},
  {path:"transferrequest",component:CreateTransferrequestComponent},
  {path:"pass",component:ChangepassComponent},
  {path:"createwithdrawlrequest",component:CreateWithdrawlrequestComponent},
  {path:"",component:LoginComponent},
    {path:"signup",component:SignupComponent},
  
  
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
