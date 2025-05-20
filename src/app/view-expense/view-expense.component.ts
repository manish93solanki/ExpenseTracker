import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
})
export class ViewExpenseComponent {
  expensesData?: any;
  filterDate?: Date;
  filteredExpenses: any;

  constructor(private service: AppService) {
    this.expensesData = this.service.allExpenses();
    this.filteredExpenses = this.expensesData;
  }

  delete(event: any) {
    console.log(event.target.parentNode.parentNode.remove());
  }

  applyDatefilter() {
    if (this.filterDate) {
      this.filteredExpenses = this.expensesData.filter((exp: { date: Date }) =>
        exp.date === this.filterDate
      );
    }
    else {
      this.filteredExpenses = this.expensesData

    }
  }

  reset(){
    this.filteredExpenses = this.expensesData
  }

}
