import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AuthService } from './services/auth.service';
import { GlobalService } from './services/global.service';
import { AdminAuthGuardService } from 'app/services/admin.guard.service';
import { UserAuthGuardService } from './services/user.guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FileUploadModule
  ],
  providers: [AuthService, GlobalService, UserAuthGuardService, AdminAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
