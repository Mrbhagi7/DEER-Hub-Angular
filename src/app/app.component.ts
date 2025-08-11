import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LandingpageComponent} from './landingpage/landingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LandingpageComponent,LoginComponent,SidebarComponent,NavbarComponent,RegisterComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
