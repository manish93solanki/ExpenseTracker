import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExpenseTracker';

  constructor(private router: Router, private service:AppService ) {

  }

  addExpense() {
    this.router.navigate(['/AddExpense']);
  }


  expenses(){
    
  }
  



}
