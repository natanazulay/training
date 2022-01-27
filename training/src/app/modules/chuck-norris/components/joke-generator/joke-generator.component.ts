import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from "../../models/joke.modle";

@Component({
	selector: 'app-joke-generator',
	templateUrl: './joke-generator.component.html',
	styleUrls: ['./joke-generator.component.scss']
})
export class JokeGeneratorComponent {

	public disable: boolean = true;
	public searchKey: string;

	@Input() public joke: Joke | null;
	@Input() public jokes: Joke[] | null;
	@Input() public isSearchMode: boolean;
	@Output() private generateJokeWasClicked: EventEmitter<void>  = new EventEmitter<void>()
	@Output() private generateJokeWasSearch: EventEmitter<string> = new EventEmitter<string>()

	public onClick(searchKey: string): void {
		this.generateJokeWasClicked.emit();
		this.generateJokeWasSearch.emit(searchKey);
	}

	public onSearch(searchKey: string): void {
		this.generateJokeWasSearch.emit(searchKey);
	}

}
