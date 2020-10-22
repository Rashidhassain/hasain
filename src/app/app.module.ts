import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { MapsComponent } from './pages/maps/maps.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    MapsComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,

    MatCardModule,
    MatExpansionModule, 
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    FooterModule,
    MatTableModule,
    FixedPluginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
