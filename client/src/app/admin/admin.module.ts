import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FileUploadModule} from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule, routedComponents } from './admin-routing';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';

@NgModule({
  imports: [AdminRoutingModule, 
    CommonModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    ReactiveFormsModule],
    providers:[CategoryService, ProductService],
  declarations: [routedComponents]
})
export class AdminModule {}