import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthsComponent } from './components/months/months.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component:HomeComponent},
  { path: 'add-expense', component: ExpenseComponent },
  { path: 'all-months', component: MonthsComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
