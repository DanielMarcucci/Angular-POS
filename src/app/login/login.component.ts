import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { UsersService } from "../services/users.service";
import { IUsersLogin } from "../interfaces/users";
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: Boolean = false;
  loginForm: FormGroup;

  user = {} as IUsersLogin;

  constructor(
    private router: Router,
    private usersServices: UsersService,
    private formBuilder: FormBuilder,
    private elementRef: ElementRef
  ) { 
    localStorage.clear();
    this.loginForm = this.formBuilder.group({
      username: ['caja4', Validators.required],
      password: ['4444', Validators.required],
    });
  }

  ngOnInit() {
    this.elementRef.nativeElement.querySelector('#username').focus();
  }

  get f() { return this.loginForm.controls }
  get fVal() { return this.loginForm.value }

  private onLogin() {
    this.submitted = true;
    this.user.username = this.fVal.username;
    this.user.password = this.fVal.password;

    if (this.loginForm.invalid) {
      return;
    }

    this.submitted = false;
    this.usersServices.getToken(this.user).subscribe(
      (data: any) => {
        if (data.user != null) {
          localStorage.setItem('user', JSON.stringify(data.user));
          this.router.navigate([data.role.path]);
        } else {
          alert("no conincide la contraseña o el usuario");
        }
      },
      (error: HttpErrorResponse ) => {
        console.log(error)
      },
    )
    //this.router.navigate(['pos']);
  }
  
}
