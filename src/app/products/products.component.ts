import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:any=[] 
  szo="" 
  
  constructor(private base:BaseService, private search:SearchService){
    base.getFoods().subscribe(
      (res)=>this.products=res
    )
    search.getKeresoSzo().subscribe(
      (adat)=>this.szo=adat
    )
  }
  deleteFood(food:any){
    this.base.deleteFood(food).subscribe(
      {
        next:(res)=>{          
          console.log("Sikeres törlés")
          this.base.getFoods().subscribe(
            (res)=>this.products=res
          )        
        },
        error:(res)=>console.log("Hiba a törlésnél", res)
      }
    )
  }


}
