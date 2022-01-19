import { Component } from '@angular/core';
import { JokeService } from "./services/joke/joke.service";
import { Joke } from "../models/joke";

@Component({
	selector: 'app-chuck-norris-main',
	templateUrl: './chuck-norris-main.component.html',
	styleUrls: ['./chuck-norris-main.component.scss']
})
export class ChuckNorrisMainComponent {

	public joke!: Joke;
	public isSearchMode: boolean = true;

	constructor(private randomJokeService: JokeService) {
	}

	public toggleJokeMode(): void {
		this.isSearchMode = !this.isSearchMode;
	}

	public generateJoke(getJoke: boolean): void {
		if (getJoke) {
			this.randomJokeService.getRandomJoke().subscribe(joke => this.joke = joke);
		}
	}
}

