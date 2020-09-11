import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PublicRoutingModule, routedComponents } from './public-routing';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { StoreService } from '../services/store.service';
import { Cart } from '../models/cart';

@NgModule({
  imports: [PublicRoutingModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule],
  providers: [StoreService, Cart],
  declarations: [routedComponents, UnauthorizeComponent]
})
export class PublicModule { }