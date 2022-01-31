import { Component, Input } from '@angular/core';
import { Joke } from "../joke";

@Component({
	selector: 'app-joke',
	templateUrl: './joke.component.html',
	styleUrls: ['./joke.component.scss']
})
export class JokeComponent {
	@Input() public joke: Joke;
}