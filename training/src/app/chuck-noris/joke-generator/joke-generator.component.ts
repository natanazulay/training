import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from "../joke";

@Component({
	selector: 'app-joke-generator',
	templateUrl: './joke-generator.component.html',
	styleUrls: ['./joke-generator.component.scss']
})
export class JokeGeneratorComponent {
	@Input() public jokeList: Joke[];
	@Input() public joke: Joke;
	@Input() public isSearchMode: boolean;
	public searchedValue: string;

	@Output() generateRandomJokeClicked: EventEmitter<void> = new EventEmitter<void>();
	@Output() generateJokesClicked: EventEmitter<string>    = new EventEmitter<string>();
	@Output() generateJokesSearched: EventEmitter<string>   = new EventEmitter<string>();

	onGenerateJokesFromClick(searchedValue: string): void {
		if (!this.isSearchMode) {
			this.generateRandomJokeClicked.emit();
		} else {
			this.generateJokesClicked.emit(searchedValue);
		}
	}

	onGenerateJokesFromSearch(searchedValue: string): void {
		this.searchedValue = searchedValue;
		this.generateJokesSearched.emit(searchedValue);
	}
}
