import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }

  getCountries():Observable<any>{
    return this.http.get("/countries");


  }

  getCovidData(country:string):Observable<any>{
    console.log(country);
    const url = "https://api.covid19api.com/total/dayone/country/" + country;
    return this.http.get<any>(url);


  }
}
