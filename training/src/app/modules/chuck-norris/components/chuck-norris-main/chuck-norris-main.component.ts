import { Component } from '@angular/core';
import { JokeService } from "../../services/joke/joke.service";
import { Observable } from "rxjs";
import { Joke } from "../../models/joke.modle";

@Component({
	selector: 'app-chuck-norris-main',
	templateUrl: './chuck-norris-main.component.html',
	styleUrls: ['./chuck-norris-main.component.scss']
})
export class ChuckNorrisMainComponent {

	public joke$: Observable<Joke>;
	public jokes$: Observable<Joke[]>
	public isSearchMode: boolean = true;
	private searchKey: string;

	constructor(private jokeService: JokeService) {
	}

	public toggleJokeMode(): void {
		this.isSearchMode = !this.isSearchMode;
	}

	public generateRandomJoke(): void {
		this.joke$ = this.jokeService.getRandomJoke();
	}

	public generateSearchJoke(searchKey: string): void {
		if (searchKey !== this.searchKey) {
			this.jokes$ = this.jokeService.getSearchListJokes(searchKey);
		}
		this.searchKey = searchKey;
	}

}

