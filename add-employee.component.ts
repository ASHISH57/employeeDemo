import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators  } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor( private empService : EmployeeService) { }

  public alert : boolean = false;

  addEmployee = new FormGroup({
    FName : new FormControl(),
    LName : new FormControl(),
    Status : new FormControl(),
    Gender : new FormControl(),
    Designation : new FormControl(),
    Department : new FormControl(),
    DOBD : new FormControl(),
    DOBM : new FormControl(),
    DOBY : new FormControl(),
    JDD : new FormControl(),
    JDM : new FormControl(),
    JDY : new FormControl(),
    
  });

  ngOnInit(): void {
  }

  collectEmployee(){
    this.empService.addData(this.addEmployee.value).subscribe((result) =>{
      this.alert = true;
      console.log("Result from addemployee",result);
    });
  }

}
