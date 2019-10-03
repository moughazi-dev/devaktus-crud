import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  employeeList : Employee[];

  constructor(private employeeServiceInstance: EmployeeService) { }

  ngOnInit() {
    this.getEmployeesList().subscribe(res => {
      this.employeeList = res;
  });
  }

  getEmployeesList(){
		return this.employeeServiceInstance.getEmployeesList();
  }
  
  addTodo(employee: Employee) {
    this.employeeServiceInstance.addEmployee(employee).subscribe(employee => {
      this.employeeList.push(employee);
    });
  }

}
