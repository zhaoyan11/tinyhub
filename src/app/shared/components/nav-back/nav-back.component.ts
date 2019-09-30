import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-back',
  templateUrl: './nav-back.component.html',
  styleUrls: ['./nav-back.component.css']
})
export class NavBackComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['search']);
  }
}
