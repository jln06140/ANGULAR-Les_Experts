import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavigationComponent } from './view/navigation/navigation.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { LoginComponent } from './view/login/login.component';
import { TableCaseComponent } from './view/tables/table-case/table-case.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    LoginComponent,
    TableCaseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
