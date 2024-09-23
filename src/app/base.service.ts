import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private url="http://localhost:3000/foods/"
  constructor(private http:HttpClient) { 
    this.http.get(this.url).subscribe(
      (adatok)=>console.log(adatok)
    )
  }

  getFoods(){
    return this.http.get(this.url)
  }
  deleteFood(food:any){
    return this.http.delete(this.url+food.id)
  }
}
