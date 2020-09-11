import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styles: []
})
export class ProductCreateComponent implements OnInit {
  categories: any[] = [];
  uploadUrl: string;
  productForm: FormGroup;

  productService: ProductService;
  categoryService: CategoryService;

  constructor(formbuilder: FormBuilder, private router: Router, _productService: ProductService, _categoryService: CategoryService, private globalService: GlobalService) {
    this.uploadUrl = this.globalService.apiAddress + '/file'
    this.productService = _productService;
    this.categoryService = _categoryService;

    this.productForm = formbuilder.group({
      'name': [null, [Validators.required]],
      'unitPrice': [null, [Validators.required]],
    //  'file': [null],
      'file': [null, [Validators.required]],
      'categoryId': ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.categoryService
      .getAll()
      .subscribe((data: any) => {
        this.categories = data;
      });
  }

  onSelect(event, pfuReference) {
    const file = event.files[0];
    if (file) {
      const image = new Image();
      image.src = file.objectURL.changingThisBreaksApplicationSecurity;
      // disabling auto to prevent the file to upload
      pfuReference.auto = false;
      image.addEventListener('load', () => {
        pfuReference.auto = true;
        pfuReference.upload();
      });
    }
  }
  onUpload(event) {
    // console.log(event);
    let res =JSON.parse(event.xhr.response);
    console.log(res.filePath);
     this.productForm.controls['file'].setValue(res.filePath);
  }

  saveData(form: any) {
    //this.productForm.controls['file'].setValue('../assets/images/file-1495869967204.jpg');
    if (form.valid) {
      this.productService
        .add(form.value)
        .subscribe((data: any) => {
          this.router.navigate(['/admin/product']);
        });
    }
  }

}
