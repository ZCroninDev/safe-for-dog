import { Component } from '@angular/core';

import * as foodList from 'src/assets/foodList.json';

import * as alternativeAndMisspellings from 'src/assets/alternativeAndMisspellings.json';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	search: string;
	validSearch: boolean = false;
	invalidSearch: boolean = false;
	foods: object;
	foodData: object;
	altSpellings: object;
	foodNotFound: string;

	constructor() {
		this.foods = JSON.parse(JSON.stringify(foodList));
		this.altSpellings = JSON.parse(JSON.stringify(alternativeAndMisspellings));
	}

	
	userSearch(foodBeingSearched: string) {
		// Checks if foodBeingSearched matches foods from foodList.json
		if (this.foods[foodBeingSearched]) {
			console.log('Valid search');
			this.validSearch = true;
			this.invalidSearch = false;
			this.foodData = this.foods[foodBeingSearched];
		// If false, checks if foodBeingSearched matches altertative and misspellings of foods from altSpellings.json
		} else if (this.altSpellings[foodBeingSearched]) {
			console.log('Valid search with alternate spelling or misspelling');
			this.validSearch = true;
			this.invalidSearch = false;
			this.foodData = this.foods[this.altSpellings[foodBeingSearched]];
		// If false, sets foodData to empty object and sets valid search to false
		} else {
			console.log('Invalid search')
			this.validSearch = false;
			this.invalidSearch = true;
			this.foodData = {};
			this.foodNotFound = foodBeingSearched.toUpperCase();
		}
	}
	
}
