import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup} from "@angular/forms";
import {AccountsService} from "../services/accounts.service";
import {catchError, Observable, throwError} from "rxjs";
import {AccountDetails} from "../model/account.model";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit{
  accountFormGroup! : FormGroup; // Pour la creation du formulaire grace a ReactiveFormsModule
  currentpage : number = 0;
  pageSize : number = 5;
  accountObservable! : Observable<AccountDetails>;
  operationsFormGroup! : FormGroup;
  errorMessage! : string;
  constructor(private accountService : AccountsService,private fb:FormBuilder) {

  }

  ngOnInit(): void {
     this.accountFormGroup = this.fb.group({
       accountId : this.fb.control('')
     });
      this.operationsFormGroup = this.fb.group({
        operationType : this.fb.control(null),
        amount : this.fb.control(0),
        accountDestination : this.fb.control(null),
        description : this.fb.control(null)
      })

  }

  handleSearchAccount() {
    let accountId : string = this.accountFormGroup.value.accountId;
    this.accountObservable = this.accountService.getAccount(accountId,this.currentpage,this.pageSize).pipe(
      catchError(err =>{
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  gotoPage(page: number) {
    this.currentpage = page;
    this.handleSearchAccount();
  }

  handleAccountOperation() {
      let accountId : string = this.accountFormGroup.value.accountId;
      let operationType = this.operationsFormGroup.value.operationType;
      if(operationType=='DEBIT'){
        this.accountService.debit(accountId,this.operationsFormGroup.value.amount,this.operationsFormGroup.value.description).subscribe({
          next : (data) =>{
            alert("Success debit")
            this.operationsFormGroup.reset()
            this.handleSearchAccount();
          },
          error : (err) => {
            console.log(err);
          }
        });
      }else if(operationType=='CREDIT'){
        this.accountService.credit(accountId,this.operationsFormGroup.value.amount,this.operationsFormGroup.value.description).subscribe({
          next : (data) =>{
            alert("Success credit")
            this.operationsFormGroup.reset()
            this.handleSearchAccount();
          },
          error : (err) => {
            console.log(err);
          }
        });
      }else if(operationType=='TRANSFERT'){
        this.accountService.transfert(accountId,this.operationsFormGroup.value.accountDestination,this.operationsFormGroup.value.amount,this.operationsFormGroup.value.description).subscribe({
          next : (data) =>{
            alert("Success transfert")
            this.operationsFormGroup.reset()
            this.handleSearchAccount();
          },
          error : (err) => {
            console.log(err);
          }
        });
      }
  }
}
