import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-back',
  templateUrl: './nav-back.component.html',
  styleUrls: ['./nav-back.component.css']
})
export class NavBackComponent {

  constructor(private location: Location) { }


  back() {
    this.location.back();
  }
}
