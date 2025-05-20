import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from './add-expense.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { AddExpenseRoutingModule } from './add-expense-routing.module';


@NgModule({
  declarations: [AddExpenseComponent],
  imports: [
    AddExpenseRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[AddExpenseComponent]
})


export class AddExpenseModule {
  
 }
