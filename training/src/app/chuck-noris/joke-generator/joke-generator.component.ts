import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from "../joke";
import {ErrorStateMatcher} from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";

export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

@Component({
	selector: 'app-joke-generator',
	templateUrl: './joke-generator.component.html',
	styleUrls: ['./joke-generator.component.scss']
})
export class JokeGeneratorComponent {
	@Input() public jokeList: Joke[];
	@Input() public joke: Joke;
	@Input() public mode;
	public inputKey: string;
	nameFormControl = new FormControl('', [Validators.required]);
	matcher = new MyErrorStateMatcher();

	@Output() generateRandomJokeClicked: EventEmitter<void> = new EventEmitter<void>();
	@Output() generateJokesClicked: EventEmitter<string>    = new EventEmitter<string>();
	@Output() generateJokesSearched: EventEmitter<string>   = new EventEmitter<string>();

	onGenerateJokesFromClick(inputKey: string): void {
		if (this.mode) {
			this.generateJokesClicked.emit(inputKey);
		} else {
			this.generateRandomJokeClicked.emit();
		}
	}

	onGenerateJokesFromSearch(inputKey: string): void {
		this.inputKey = inputKey;
		this.generateJokesSearched.emit(inputKey);
	}
}
