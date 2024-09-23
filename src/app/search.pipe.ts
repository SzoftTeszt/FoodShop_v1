import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(foods:any[], szo:string): any {
    if (!foods) return null;
    if (!szo) return foods
    return foods.filter(
      (food)=>{
        return food.leiras.toLowerCase().includes(szo.toLowerCase())}
    )
  }

}
