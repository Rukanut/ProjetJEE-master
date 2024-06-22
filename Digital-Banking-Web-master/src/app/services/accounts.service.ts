import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountDetails} from "../model/account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http:HttpClient) { }

  public getAccount(accountId : string , page : number , size : number):Observable<AccountDetails>{
    return this.http.get<AccountDetails>("http://localhost:8085/accounts/"+accountId+"/pageOperations?page="+page+"&size="+size);
  }

  public debit(accountId : string , amount : number , description : string){
    return this.http.post("http://localhost:8085/accounts/debit",{accountId : accountId,amount : amount,description : description});
  }

  public credit(accountId : string , amount : number , description : string){
    return this.http.post("http://localhost:8085/accounts/credit",{accountId : accountId,amount : amount,description : description});
  }

  public transfert(accountSource : string,accountDestination : string ,amount : number , description : string,){
    return this.http.post("http://localhost:8085/accounts/transfert",{accountSource,accountDestination,amount,description});
  }

  public getaccountsCustomer(customerId: string):Observable<Array<AccountDetails>>{
    return this.http.get<Array<AccountDetails>>("http://localhost:8085/accounts/"+customerId);
  }



}
