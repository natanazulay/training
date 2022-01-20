import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-joke-generator',
	templateUrl: './joke-generator.component.html',
	styleUrls: ['./joke-generator.component.scss']
})
export class JokeGeneratorComponent {
	@Input() public joke: string;
	@Output() generateJokeClicked : EventEmitter<boolean> = new EventEmitter<boolean>();
	constructor() {
	}

	onGenerateJokeClick(click : boolean) : void{
		this.generateJokeClicked.emit(click);
	}
}
