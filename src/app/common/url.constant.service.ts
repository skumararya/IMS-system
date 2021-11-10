import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const apiurl:any ="https://newsapi.org/v2/top-headlines/sources?apiKey=";
const countrywisenews = "https://newsapi.org/v2/top-headlines?country=in&apiKey=050457148457428bad6f116ab7b96195";
@Injectable({
  providedIn: 'root'
})
export class UrlConstantService {
 
  constructor(protected http: HttpClient) {

   }
   public newsdata():Observable<any>{
        return this.http.get(apiurl + '050457148457428bad6f116ab7b96195').pipe(map((res: any) => res));
   }
   public newscountry():Observable<any>{
    return this.http.get(countrywisenews).pipe(map((res: any) => res));
}

}