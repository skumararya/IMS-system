
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class RequestMethodsRepositoryService {
  
   // public static getPropertyType: string = environment.url + "/api/PropertyType";
  // public static getNews: string = environment.url + "{050457148457428bad6f116ab7b96195}";
  private datasource = new BehaviorSubject('toggleSidebar');
  data = this.datasource.asObservable();

  constructor() { }
  
  getData(){
    return this.data;
}
}

