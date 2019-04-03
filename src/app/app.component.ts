import { Component, OnInit } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public allFlightData: any[] = [];
  public flightData: any[] = [];
  public airlines: string[] = [];
  public selectedAirlines = {};


  private _activeFilters = {};
  private _map = {};

  
  constructor() {}

  ngOnInit() {
    this.allFlightData = [...data];
    this.flightData = data;
    this.getUniqueFlights();
  }

  getUniqueFlights() {
    for (const flight of this.flightData) {
      for (const seg of flight.flight.flightSegments) {
        this._map[seg.airlineCode] = typeof (this._map[seg.airlineCode]) === 'undefined' ? [ flight ] : this._map[seg.airlineCode].concat(flight)
        const o = {
          code: seg.airlineCode,
          name: seg.airlineName
        };
      }
    }

    this.airlines = Object.keys(this._map);
    // console.log(this.airlines);

  }

  onFilterChange(code, isChecked) {
    this._activeFilters[code] = isChecked;
    // this.flightData = [];
    for (const key in this._activeFilters) {
      if (this._activeFilters[key]) {
        this.flightData = this._map[key];
      }
    }
  }

}
