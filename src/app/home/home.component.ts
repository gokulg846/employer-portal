import { Component, OnInit } from '@angular/core';
import { Employee, employees } from 'src/employees';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: any = [];
  employee: Employee | undefined;
  listView: boolean = true;
  cardView: boolean = false;
  private router: Router;
  constructor(private httpClient: HttpClient, r: Router) { 
    //this.show = true;
    this.router = r;
  }
  onClick(emp: Employee){
    this.employee = emp;
    //this.show = false;
    this.router.navigate(['/details'], {queryParams: {eId: emp.id}});
  }
  Detail(){
    this.cardView = true;
    this.listView = false
  }
  List(){
    this.cardView = false;
    this.listView = true;
  }
  ngOnInit(): void {
      //this.show = true;
      //console.log("Home");
      this.httpClient.get("assets/emps.json").subscribe(data =>{
      console.log(data);
      this.employees = data;
      console.log(this.employees);
      })
      
  }
}
