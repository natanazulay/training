import { Component, OnInit, Output } from '@angular/core';
import { JokeGeneratorService } from "../joke-generator.service";

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent{
	joke: string = '';

	constructor(private jokeService: JokeGeneratorService) {
	}

	private generateJoke(): void {
		this.jokeService.generateJoke().subscribe(joke => this.joke = joke.value);
	}

	onNotify(click : boolean) {
		click? this.generateJoke() : 0;
	}
}
