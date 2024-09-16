import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuItems:any = [
    {path:"home", text:"Home"},
    {path:"products", text:"Products"},
    {path:"login", text:"Login"} 
  ];
}
