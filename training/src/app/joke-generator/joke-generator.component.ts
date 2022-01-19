import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from "../models/joke";

@Component({
	selector: 'app-joke-generator',
	templateUrl: './joke-generator.component.html',
	styleUrls: ['./joke-generator.component.scss']
})
export class JokeGeneratorComponent {

	@Input() public joke!: Joke;
	@Output() private generateJokeWasClicked: EventEmitter<boolean> = new EventEmitter<boolean>()

	public onClick(): void {
		this.generateJokeWasClicked.emit(true);
	}

}
