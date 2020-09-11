import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styles: []
})
export class PublicLayoutComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService, private router: Router, public cart:Cart) {
    this.user = this.authService.user;
    //console.log(this.user);
  }

  ngOnInit() {
  }
  signOut() {
    this.authService.logOut();
    this.router.navigate(['login']);
  }
}
