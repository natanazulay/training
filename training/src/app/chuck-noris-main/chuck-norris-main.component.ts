import { Component } from '@angular/core';
import { JokeGeneratorService } from "../joke-generator.service";

@Component({
	selector: 'app-chuck-norris-main',
	templateUrl: './chuck-norris-main.component.html',
	styleUrls: ['./chuck-norris-main.component.scss']
})
export class ChuckNorrisMain {
	public joke: string;

	constructor(private jokeService: JokeGeneratorService) {
	}

	private generateJoke(): void {
		this.jokeService.generateJoke().subscribe(joke => this.joke = joke.value);
	}

	onGenerateJokeClick() : void {
		this.generateJoke();
	}
}
