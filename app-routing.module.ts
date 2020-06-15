import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';


const routes: Routes = [
  {
    component : AddEmployeeComponent,
    path      : 'Add'
  },
  {
    component : EditEmployeeComponent,
    path      : 'Edit/:id'
  },
  {
    component : ListEmployeeComponent,
    path      : 'list'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
