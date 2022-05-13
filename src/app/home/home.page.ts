import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	search: string;
	validSearch: boolean = false;

	constructor() {
		
	}

	userSearch(str: string) {
		console.log('logging search', str)
		if (str === 'bananas') {
			console.log('Valid search')
			this.validSearch = true;
		} else {
			console.log('Invalid search')
			this.validSearch = false;
			
		}
	}

	
}
