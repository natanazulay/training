import { Component } from '@angular/core';
import { JokeGeneratorService } from "../joke-generator.service";
import { Observable } from "rxjs";
import { Joke } from "../joke";

@Component({
	selector: 'app-chuck-norris-main',
	templateUrl: './chuck-norris-main.component.html',
	styleUrls: ['./chuck-norris-main.component.scss']
})

export class ChuckNorrisMain {
	public jokeList$: Observable<Joke[]>;
	public joke$: Observable<Joke>;
	public isSearchMode: boolean = false;
	public searchInput: string;

	constructor(private jokeService: JokeGeneratorService) {
	}

	public getJokesFromSearch(searchedValue: string): void {
		if (this.searchInput != searchedValue) {
			this.jokeList$ = this.jokeService.getJokeList(searchedValue);
		}
		this.searchInput = searchedValue;
	}

	onGenerateJokeClick(): void {
		this.joke$ = this.jokeService.generateJoke();
	}

	onChangeModeClick(isSearchMode: boolean): void {
		this.isSearchMode = isSearchMode;
	}

}