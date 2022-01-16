import { Component } from '@angular/core';
import { JokeService } from "./services/joke/joke.service";
import { Joke } from "./models/joke";

@Component({
	selector: 'app-chuck-norris-main',
	templateUrl: './chuck-norris-main.component.html',
	styleUrls: ['./chuck-norris-main.component.scss']
})
export class ChuckNorrisMainComponent {

	joke!: Joke;
	isSearchMode: boolean = true;

	constructor(private randomJokeService: JokeService) {
	}

	toggleJokeMode(): void {
		this.isSearchMode = !this.isSearchMode;
	}

	onClick(): void {
		this.randomJokeService.getRandomJoke().subscribe(joke => this.joke = joke)
	}
}
