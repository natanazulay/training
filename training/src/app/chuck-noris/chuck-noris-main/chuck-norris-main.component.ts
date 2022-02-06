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
	public changeMode: boolean = false;
	public searchInput: string;

	constructor(private jokeService: JokeGeneratorService) {
	}

	public getJokesFromSearch(inputKey: string): void {
		if (this.searchInput != inputKey) {
			this.jokeList$ = this.jokeService.getJokeList(inputKey);
		}
		this.searchInput = inputKey;
	}

	onGenerateJokeClick(): void {
		this.joke$ = this.jokeService.generateJoke();
	}

	onChangeModeClick(mode: string): void {
		if ((mode === 'search' && !this.changeMode) || (mode === 'random' && this.changeMode)) {
			this.changeMode = !this.changeMode;
		}
	}

}