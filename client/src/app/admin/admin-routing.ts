import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { CategoryListComponent } from './category/category-list.component';
import { ProductListComponent } from './product/product-list.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { CategoryCreateComponent } from './category/category-create.component';
import { ProductCreateComponent } from './product/product-create.component';

const routes: Routes = [
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: '', component: AdminDashboardComponent },
            { path: 'category', component: CategoryListComponent },
            { path: 'category/create', component: CategoryCreateComponent },
            { path: 'product/create', component: ProductCreateComponent },
            { path: 'product', component: ProductListComponent }]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }

export const routedComponents = [
    AdminLayoutComponent,
    CategoryCreateComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductCreateComponent,
    AdminDashboardComponent];
