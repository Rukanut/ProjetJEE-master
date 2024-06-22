import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../model/customer.model";
import {AccountsService} from "../services/accounts.service";
import {catchError, Observable, throwError} from "rxjs";
import {AccountDetails} from "../model/account.model";

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit{
  customerId! : string;
  customer! : Customer;
  accounts! : Observable<Array<AccountDetails>>
  errorMessage! : string;
  constructor(private accountService : AccountsService,private route : ActivatedRoute,private router : Router) {
    this.customer = this.router.getCurrentNavigation()?.extras.state as Customer;
  }
  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
    this.accounts = this.accountService.getaccountsCustomer(this.customerId).pipe(
      catchError(err =>{
        this.errorMessage = err.message;
        return throwError(err);
      })
    );

  }





}
