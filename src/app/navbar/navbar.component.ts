import { Component } from '@angular/core';
import { SearchService } from '../search.service';

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
  szo=""

  constructor(private search:SearchService){}
  setSearch(){
    this.search.setKeresoSzo(this.szo)
  }
  setSearch2(event:any){
    // console.log(event.target.value)
    this.search.setKeresoSzo(event.target.value)
  }
}
