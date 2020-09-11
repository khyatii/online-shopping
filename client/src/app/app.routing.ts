import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuardService } from "app/services/admin.guard.service";
import { UserAuthGuardService } from './services/user.guard.service';

const routes: Routes = [
    { path: '', loadChildren: 'app/public/public.module#PublicModule' },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate:[AdminAuthGuardService] },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule', canActivate:[UserAuthGuardService]  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
