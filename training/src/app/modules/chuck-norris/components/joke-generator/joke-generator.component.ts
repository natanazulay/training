import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from "../../models/joke.modle";

@Component({
	selector: 'app-joke-generator',
	templateUrl: './joke-generator.component.html',
	styleUrls: ['./joke-generator.component.scss']
})
export class JokeGeneratorComponent {

	@Input() public joke: Joke;
	@Output() private generateJokeWasClicked: EventEmitter<void> = new EventEmitter<void>()

	public onClick(): void {
		this.generateJokeWasClicked.emit();
	}

}
