import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	sidebar : [];
	constructor() { 
		this.sidebar = [ { name: 'Home' , path: '/home' } ,
						{ name: 'Main' , path: '/main' } ,
						{ name: 'About Us' , path: '/about' },{ name: 'Contact Us' , path: '/contact' } ];
	}

	ngOnInit() {
	}

}
