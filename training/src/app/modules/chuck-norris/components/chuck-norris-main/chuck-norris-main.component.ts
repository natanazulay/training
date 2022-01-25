import { Component } from '@angular/core';
import { JokeService } from "../../services/joke/joke.service";
import { Observable, pluck } from "rxjs";

@Component({
	selector: 'app-chuck-norris-main',
	templateUrl: './chuck-norris-main.component.html',
	styleUrls: ['./chuck-norris-main.component.scss']
})
export class ChuckNorrisMainComponent {

	public joke$: Observable<any>;
	public jokes$: Observable<any>
	public isSearchMode: boolean = true;
	private searchKey: string    = "";

	constructor(private jokeService: JokeService) {
	}

	public toggleJokeMode(): void {
		this.isSearchMode = !this.isSearchMode;
	}

	public generateJoke(): void {
		this.joke$ = this.jokeService.getRandomJoke();
	}

	public generateJokeSearch(searchKey: string): void {
		if (searchKey !== this.searchKey) {
			this.jokes$ = this.jokeService.getSearchListJokes(searchKey).pipe(
				pluck('result')
			);
		}
		this.searchKey = searchKey
	}
}

