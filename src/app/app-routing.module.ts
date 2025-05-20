import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewExpenseComponent } from './view-expense/view-expense.component';


const routes: Routes = [
  {path:'', redirectTo:'/Dashboard', pathMatch:"full"},
  {path:'Dashboard', component: DashboardComponent},
  { path: 'AddExpense', loadChildren: () => import('./add-expense/add-expense.module').then(m => m.AddExpenseModule) },
  {path:'ViewExpense', component: ViewExpenseComponent},
  {path:'**', redirectTo:"/Dashboard"}
// 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
