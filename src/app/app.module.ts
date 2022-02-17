import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
import { Router } from 'next/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    DetailsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: '', component: HomeComponent},
      { path: 'details', component: DetailsComponent},
      { path: 'contact', component:ContactComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent,
              TopBarComponent
            ]
})
export class AppModule { }
