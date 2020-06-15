import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  public alert : boolean = false;

  constructor(private router :ActivatedRoute,
    private empService : EmployeeService) { }

    editEmployee = new FormGroup({
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
    console.log(this.router.snapshot.params.id);
    this.empService.currentEmployee(this.router.snapshot.params.id)
    .subscribe((result) =>{
      console.log("UpdateComponent",result);
      this.editEmployee = new FormGroup({
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
    });
  }
  updateEmployee(){
    
  }

}
