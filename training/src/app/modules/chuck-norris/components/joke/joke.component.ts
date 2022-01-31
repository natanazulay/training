import { Component, Input } from '@angular/core';
import { Joke } from "../../models/joke.modle";

@Component({
	selector: 'app-joke',
	templateUrl: './joke.component.html',
	styleUrls: ['./joke.component.scss']
})
export class JokeComponent {

	@Input() public joke: Joke;
	@Input() public jokes: Joke[];
	@Input() public isSearchMode: boolean;

}
