import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:any=[]  
  
  constructor(private base:BaseService){
    base.getFoods().subscribe(
      (res)=>this.products=res
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
