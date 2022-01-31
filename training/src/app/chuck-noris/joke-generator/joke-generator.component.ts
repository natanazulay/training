import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from "../joke";

@Component({
	selector: 'app-joke-generator',
	templateUrl: './joke-generator.component.html',
	styleUrls: ['./joke-generator.component.scss']
})
export class JokeGeneratorComponent {
	@Input() public jokeList: Joke[] | null;
	@Input() public joke: Joke | null;
	@Input() public clicked: string;
	public term: string;

	@Output() generateRandomJokeClicked: EventEmitter<void> = new EventEmitter<void>();
	@Output() generateJokesClicked: EventEmitter<string>    = new EventEmitter<string>();
	@Output() generateJokesSearched: EventEmitter<string>   = new EventEmitter<string>();

	onGenerateJokesFromClick(term: string): void {
		if (this.clicked === 'search') {
			this.generateJokesClicked.emit(term);
		} else if (this.clicked === 'random') {
			this.generateRandomJokeClicked.emit();
		}
	}

	onGenerateJokesFromSearch(term: string): void {
		this.term = term;
		this.generateJokesSearched.emit(term);
	}
}
