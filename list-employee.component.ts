import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  collection:any = [];

  constructor(private empService : EmployeeService) { }

  ngOnInit(): void {
    this.empService.getData().subscribe(
      (result) =>{
        console.warn(result);
        this.collection = result;
      });
  }


}
