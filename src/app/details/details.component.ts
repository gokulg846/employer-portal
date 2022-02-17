import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Employee} from 'src/employees';
import { setupTestingRouter } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  employees: any = []; 
  eId: number | undefined;
  employee: Employee | undefined;
  
  //eid: number = 0;
  //@Input() show: boolean = true;
  //employee: Employee | undefined;
  constructor(private route: ActivatedRoute, private httpClient: HttpClient, ro: Router) { 
    //super(http, ro);
  }

 ngOnInit(): void {
    //const routeParams = this.route.snapshot.paramMap;
    //this.eId = Number(routeParams.get('eId'));
    this.httpClient.get("assets/emps.json").subscribe(data =>{
      console.log(data);
      this.employees = data;
      this.employee = this.employees.find((emp:any) => emp.id == this.eId);
      console.log(this.employee);
      //console.log("success");
      });
   this.route
      .queryParams
       .subscribe(params => {
           this.eId = params['eId'];
        });
    
    //alert(this.eId);
    //alert(this.employee);
    
  }
  

}
