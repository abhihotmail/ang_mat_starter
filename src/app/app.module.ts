import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';


const appRoutes: Routes = [
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-create', component: CustomerCreateComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    ErrorComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [ErrorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


