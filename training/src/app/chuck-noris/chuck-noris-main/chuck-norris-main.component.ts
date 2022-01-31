import { Component } from '@angular/core';
import { JokeGeneratorService } from "../joke-generator.service";
import { Observable, Subject } from "rxjs";
import { Joke } from "../joke";

@Component({
	selector: 'app-chuck-norris-main',
	templateUrl: './chuck-norris-main.component.html',
	styleUrls: ['./chuck-norris-main.component.scss']
})

export class ChuckNorrisMain {
	public jokeList$: Observable<Joke[]>;
	public joke$: Observable<Joke>;
	public clicked: string              = 'random';
	public searchInput: string;
	public searchTerms: Subject<string> = new Subject<string>();

	constructor(private jokeService: JokeGeneratorService) {
	}

	public getJokesFromSearch(term: string): void {
		this.searchInput = term;
		this.jokeList$   = this.jokeService.getJokeList(term);
	}

	onGenerateJokeClick(): void {
		this.joke$ = this.jokeService.generateJoke();
	}

	onSearchClick(): void {
		this.clicked = 'search'
	}

	onRandomClick(): void {
		this.clicked = 'random';
	}

}