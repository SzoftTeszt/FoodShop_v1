import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  keresesSub = new BehaviorSubject("")
  constructor() { }

  getKeresoSzo(){
    return this.keresesSub
  }
  
  setKeresoSzo(szo:string){
    this.keresesSub.next(szo)
  }
}
