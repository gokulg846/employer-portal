import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit  {

  constructor() { 
  
  }

  ngOnInit(): void {
  }
}
