import { Component } from '@angular/core';

import * as foodList from 'src/assets/foodList.json';

// import * as alternativeAndMisspellings from 'src/assets/alternativeAndMisspellings.json';

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
	// altSpellings: object;

	constructor() {
		this.foods = JSON.parse(JSON.stringify(foodList));
		// this.altSpellings = JSON.parse(JSON.stringify(alternativeAndMisspellings));
		// console.log(this.altSpellings)
	}

	
	userSearch(foodBeingSearched: string) {
		if (this.foods[foodBeingSearched]) {
			console.log('Valid search')
			this.validSearch = true;
			this.foodData = this.foods[foodBeingSearched];
		} 
		// else if (this.altSpellings[foodBeingSearched]) {
		// 	this.validSearch = true;
		// 	this.foodData = this.foods[foodBeingSearched];
		// } 
		else {
			console.log('Invalid search')
			this.validSearch = false;
			this.foodData = {};
		}
	}
	
}
