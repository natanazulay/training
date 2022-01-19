import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-joke-generator',
	templateUrl: './joke-generator.component.html',
	styleUrls: ['./joke-generator.component.scss']
})
export class JokeGeneratorComponent implements OnChanges {
	@Input() joke: string = ';'
	@Output() generateJokeClicked : EventEmitter<boolean> = new EventEmitter<boolean>();
	constructor() {
	}

	public ngOnChanges(changes: SimpleChanges) {
	}

	onClick(click : boolean) {
		this.generateJokeClicked.emit(click);
	}

	onNotify(joke : string) {
		console.log(`child received joke ${joke}`);
	}
}
