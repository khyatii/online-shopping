import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  ref: string = '';
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.userForm = formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params != undefined)
        this.ref = params.ref;
    })
  }
  login(form: any) {
    if (form.valid) {
      this.authService.ValidateUser(form.value).subscribe((res) => {
        if (res.status == 200) {
          const obj: User = res.json();
          // console.log(obj);
          this.authService.setAuthInfo(obj);
          if (this.ref != undefined) {
            this.router.navigate([this.ref]);
          }
          else {
            if (obj.roles.indexOf('Admin') > -1) {
              this.router.navigate(['admin']);
            }
            else if (obj.roles.indexOf('User') > -1) {
              this.router.navigate(['user']);
            }
          }
        }
      });
    }
  }
}
