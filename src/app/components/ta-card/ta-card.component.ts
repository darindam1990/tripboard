import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ta-card',
  templateUrl: './ta-card.component.html',
  styleUrls: ['./ta-card-component.css']
})


export class CardComponent implements OnInit  {
  @Input() data: FlighData;

  ngOnInit() {

  }

  formatTime(value) {
    // should be a pipe
    const hours: number = Math.floor(value / 60);
    return `${hours}h ${(value - hours * 60)} m`;
  }
}

export interface FlighData {
  logo: string;
  name: string;
  departureTime: Date;
  departureCode: string;
  arrivalTime: Date;
  arrivalCode: string;
  numStops: number;
  duration: number;
  price: number;
}