import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from '../error/error.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string = "";
  public password: string = "";
  loading = false;


  constructor(private dialog: MatDialog, private router: Router) { }
  login() {
    this.loading = true;
    if (this.username === "test" && this.password === "test") {
      setTimeout(() => {
        this.loading = false;
        this.router.navigate(['customer-list']);
      }, 2000);
    }
    else {
      this.loading = false;
      this.dialog.open(ErrorComponent, {
        data: {
          message: "Your login information are incorrect!"
        }
      });
    }
  }

}
