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
//Tried to make an endpoint for this to connect to the backend, but it was confusing on how to pass the country 
//to the backend that is taken from the form input
  getCovidData(country:string):Observable<any>{
    console.log(country);
    const url = "https://api.covid19api.com/total/dayone/country/" + country;
    return this.http.get<any>(url);


  }
}
