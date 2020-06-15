import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:3000/data";

  getData(){
    return this.http.get(this.url);
  }
  addData(data){
    return this.http.post(this.url,data);
  }
  currentEmployee(id : number){
    return this.http.get(`${this.url}/${id}`);


  }
}
