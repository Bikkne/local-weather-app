import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../interfaces'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor() {
    this.current = {
      city: 'Nynashamn',
      country: 'Sweden',
      date: new Date(),
      image: 'assets/img/snow.svg',
      temperature: -12,
      description: 'snowy',
    } as ICurrentWeather
  }

  ngOnInit() {}
}
