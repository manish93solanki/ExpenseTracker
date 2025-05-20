import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ExpenseTrackerService {

  constructor(private router:Router) { }

  addExpense(){
    this.router.navigate(['/AddExpense']);
  }
}
