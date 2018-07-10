import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	navigation : [];
	constructor() { 
		this.navigation = [ { name: 'Home' , path: '/home' } ,
						{ name: 'Main' , path: '/main' } ,
						{ name: 'About Us' , path: '/about' },{ name: 'Contact Us' , path: '/contact' } ];
	}
	
	ngOnInit() {
	  
	}

}
