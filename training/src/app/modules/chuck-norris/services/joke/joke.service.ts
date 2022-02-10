import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, pluck, throwError } from "rxjs";
import { Joke } from "../../models/joke.modle";

@Injectable({
	providedIn: 'root'
})
export class JokeService {
	private RandomJokeUrl = 'https://api.chucknorris.io/jokes/random';
	private jokeListUrl   = 'https://api.chucknorris.io/jokes/search';

	constructor(private http: HttpClient) {
	}

	public getRandomJoke(): Observable<Joke> {
		return this.http.get<Joke>(this.RandomJokeUrl).pipe(
			map((response: Joke) => this.parseToJoke(response)),
			catchError(JokeService.handleError),
		);
	}

	public getSearchListJokes(searchKey: string): Observable<Joke[]> {
		return this.http.get<any>(this.jokeListUrl, { params: { query: searchKey } })
		.pipe(
			pluck('result'),
			map((response: Joke[]) => response.slice(0, 20).map(
				(joke: Joke) => this.parseToJoke(joke))
			),
			catchError(JokeService.handleError))
	}

	private static handleError(err: any): Observable<never> {
		let errorMessage: string;
		if (err.error instanceof ErrorEvent) {
			errorMessage = `An error occurred: ${err.error.message}`;
		} else {
			errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
		}
		console.error(err);
		return throwError(errorMessage);
	}

	public parseToJoke(data: any): Joke {
		return {
			categories: data[ 'categories' ],
			createDate: data[ 'created_at' ],
			iconUrl: data[ 'icon_url' ],
			id: data[ 'id' ],
			updatedDate: data[ 'updated_at' ],
			url: data[ 'url' ],
			value: data[ 'value' ],
		} as Joke;
	}
}
