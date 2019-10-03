import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://dummy.restapiexample.com/api/v1/employees';
  private create = 'http://dummy.restapiexample.com/api/v1/create';
  private delete = 'http://dummy.restapiexample.com/api/v1/update';

  constructor(private http: HttpClient) { }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.create}`, employee);
  }

  getEmployeesList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.delete}/${id}`, { responseType: 'text' });
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<any>(`${this.create}`, employee);
  }

}