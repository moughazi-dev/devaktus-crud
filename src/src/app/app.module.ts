import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './crud/crud.component';
import { AddComponent } from './add/add.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes } from '@angular/router';

const routes: Routes =[
  {
    path: 'add',
    component: AddComponent,
    data: { title: 'Add' }
  },
  { path: '', redirectTo:'employees', pathMatch: ''}

]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CrudComponent,
    AddComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
