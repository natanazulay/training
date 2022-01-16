import { Component, OnInit } from '@angular/core';
import { RandomJokeService } from "./services/random-joke/random-joke.service";
import { EMPTY, Subject } from "rxjs";
import { Joke } from "./services/random-joke/joke";

@Component({
	selector: 'app-chuck-norris-main',
	templateUrl: './chuck-norris-main.component.html',
	styleUrls: ['./chuck-norris-main.component.css']
})
export class ChuckNorrisMainComponent implements OnInit {

	private errorMessageSubject = new Subject<string>();
	joke!: Joke;
	toggle: boolean = true;
	constructor(private randomJokeService: RandomJokeService) {
	}

	ngOnInit(): void {
	}

	toggleStyle():void{
		this.toggle = !this.toggle;
	}
	onClick(): void {
		this.randomJokeService.getJoke().subscribe({
		next: joke => this.joke = joke,
			error: err => {
				this.errorMessageSubject.next(err);
				return EMPTY;
			}
		})
	}
}
