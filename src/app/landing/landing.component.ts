import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  title : string;
  constructor() {
	this.title = "Hi this is landing component";
  }

  ngOnInit() {
  }

}
