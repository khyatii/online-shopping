import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardComponent } from './dashboard/user-dashboard.component';
import { UserLayoutComponent } from './user-layout.component';

const routes: Routes = [
    {
        path: '', component: UserLayoutComponent, children: [
            { path: '', component: UserDashboardComponent }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule { }

export const routedComponents = [
    UserLayoutComponent,
    UserDashboardComponent,];