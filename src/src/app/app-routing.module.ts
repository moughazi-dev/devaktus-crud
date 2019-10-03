import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  { path: '', component: EmployeeListComponent},
  { path: 'employees', component: EmployeeListComponent},
  { path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
