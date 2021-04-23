import { Component } from '@angular/core';
import {CovidService} from './services/covid.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websciquiz2ang';

  countries:string
  country:string
  confirmed:Number
  recovered:Number
  deaths:Number
  currentTime:Date
  timeout:Number
  databool:boolean
  constructor(private covid:CovidService){}

  ngOnInit(){
    this.covid.getCountries().subscribe((data)=>{
      //console.log(data);
      var sortedData = data.sort((a, b) => (a.Country > b.Country) ? 1 : -1)
      console.log(sortedData);
      this.countries = sortedData;
    })
  }
  getData(){
    this.covid.getCovidData(this.country).subscribe((data)=>{
      console.log(data);
      var index = data.length - 1
      if (data.length == 0){
        alert("No Data on Inputted Country");
        this.databool = false;
      }else{
        this.databool = true;
        this.confirmed = data[index].Confirmed
        this.recovered = data[index].Recovered
        this.deaths = data[index].Deaths
        this.currentTime = data[index].Date
      }
    })
  }
  getCountry(country:string){
    this.country = country
  }
}
