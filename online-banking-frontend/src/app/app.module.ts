import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TransactionreportComponent } from './transactionreport/transactionreport.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateLoanrequestComponent } from './create-loanrequest/create-loanrequest.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { CreateChequerequestComponent } from './create-chequerequest/create-chequerequest.component';
import { CreateDepositeComponent } from './create-deposite/create-deposite.component';
import { CreateWithdrawlrequestComponent } from './create-withdrawlrequest/create-withdrawlrequest.component';
import { CreateTransferrequestComponent } from './create-transferrequest/create-transferrequest.component';
import { ChecquebookrequestComponent } from './checquebookrequest/checquebookrequest.component';
import { ApproveComponent } from './approve/approve.component';
import { AllusersComponent } from './allusers/allusers.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { BalanceComponent } from './balance/balance.component';
import{MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminpwComponent } from './adminpw/adminpw.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    TransactionreportComponent,
    LoanrequestComponent,
    CreateAccountComponent,
    CreateLoanrequestComponent,
    UpdatedetailsComponent,
    CreateChequerequestComponent,
    CreateDepositeComponent,
    CreateWithdrawlrequestComponent,
    CreateTransferrequestComponent,
    ChecquebookrequestComponent,
    ApproveComponent,
    AllusersComponent,
    ChangepassComponent,
    BalanceComponent,
    AdminpwComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSliderModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
