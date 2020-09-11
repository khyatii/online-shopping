import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styles: []
})
export class UserLayoutComponent implements OnInit {

  user: User;
  constructor(private authService: AuthService, private router: Router) {
    this.user = authService.user;
  }

  ngOnInit() {
  }
  signOut() {
    this.authService.logOut();
    this.router.navigate(['login']);
  }
}
