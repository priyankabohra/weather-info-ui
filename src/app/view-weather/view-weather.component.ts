import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WeatherService} from "../service/weather.service";
import {Weather} from "../model/weather.model";

@Component({
  selector: 'view-weather',
  templateUrl: './view-weather.component.html',
  styleUrls: ['./view-weather.component.css']
})
export class ViewWeatherComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private weatherService:WeatherService) {
   }
   weathers: Array<Weather>=[];
   addForm: FormGroup;

   ngOnInit() {
    this.addForm = this.formBuilder.group({
          cityName: ['', Validators.required]
        });
   }

 onSubmit() {
     var city = this.addForm.value.cityName;
     if(city==undefined || city==""){
       alert("City Name can not be blank ");
     }else{
          this.weatherService.getWeather(city)
           .subscribe( data => {
              this.weathers.push(data);
           }, err => {
                alert('Error '+ err.error)
           });

     }
 }


}
