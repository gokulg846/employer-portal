import { Component, OnInit } from '@angular/core';
import { employees } from 'src/employees';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees = employees;
  constructor() { }

  ngOnInit(): void {
  }

}
