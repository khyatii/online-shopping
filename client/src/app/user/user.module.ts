import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserRoutingModule, routedComponents } from './user-routing';

@NgModule({
  imports: [UserRoutingModule, 
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule],
  declarations: [routedComponents]
})
export class UserModule {}