import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService,private router:Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
  }

  save() {
    const employee = {
      name: this.employee.employee_name,
      salary: this.employee.employee_salary,
      age: this.employee.employee_age
    }

    this.employeeService.createEmployee(employee).
    subscribe(res => {
       this.goToList();
       } 
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList(){
    this.router.navigate(['/employees']);
  }

}
