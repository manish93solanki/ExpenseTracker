import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {

  expenses: [] = [];

  constructor(private service: AppService) {

    if (this.expenses != undefined) {
      this.expenses = this.service.allExpenses();
    }

  }

  expensesData: any = [];



  expenseForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    amount: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  })

  get title() {
    return this.expenseForm.get('title');
  }

  get date() {
    return this.expenseForm.get('date');
  }

  get amount() {
    return this.expenseForm.get('amount');
  }


  onSubmit(expense: any) {
    console.log("expense", expense);
    this.expensesData.push(expense.value);
    console.log("expense", this.expensesData);
    this.service.passExpenses(this.expensesData);
  }

  // console.log("a",a)
}
