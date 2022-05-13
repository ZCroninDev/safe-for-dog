import { Component } from '@angular/core';

import * as foodList from 'src/assets/foodList.json'

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	search: string;
	validSearch: boolean = false;
	foods: object;
	foodData: object;

	constructor() {
		// console.log(typeof(foodList));
		this.foods = JSON.parse(JSON.stringify(foodList));
		console.log(foodList)
		console.log(this.foods['banana'])
	}

	
	userSearch(foodBeingSearched: string) {
		
		if (this.foods[foodBeingSearched]) {
			console.log('Valid search')
			this.validSearch = true;
			this.foodData = this.foods[foodBeingSearched];
		} else {
			console.log('Invalid search')
			this.validSearch = false;
			this.foodData = {};
		}
	}
	
}
