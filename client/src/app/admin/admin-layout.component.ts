import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styles: []
})
export class AdminLayoutComponent implements OnInit {
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
