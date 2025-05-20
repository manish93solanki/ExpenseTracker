import { Injectable } from '@angular/core';
import { AddExpenseComponent } from './add-expense/add-expense.component';


@Injectable({
  providedIn: 'root'
})
export class AppService {
    Expenses:any;

  constructor() { }

  passExpenses(allexpenseData:any){
      this.Expenses = allexpenseData;
  }
   
  allExpenses(){
      return this.Expenses;
  }

}
