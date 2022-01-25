import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, throwError } from "rxjs";
import { Joke } from "../../models/joke.modle";

@Injectable({
	providedIn: 'root'
})
export class JokeService {
	private RandomJokeUrl = 'https://api.chucknorris.io/jokes/random';
	private jokeListUrl   = 'https://api.chucknorris.io/jokes/search'
	constructor(private http: HttpClient) {
	}

	public getRandomJoke(): Observable<Joke> {
		return this.http.get<Joke>(this.RandomJokeUrl).pipe(
			catchError(JokeService.handleError)
		);
	}

	public getSearchListJokes(searchKey: string): Observable<any> {
		if (searchKey.length > 2 && searchKey.length < 120) {
			return this.http.get<any>(this.jokeListUrl, { params: { query: searchKey } })
			.pipe(
				catchError(JokeService.handleError))
		} else {
			return of([])
		}
	}

	//
	// listOfJoke$ = this.http.get<Joke[]>(this.jokeListUrl).pipe(
	// 	// tap(data => data['result']),
	// 	tap(data => console.log('Products', JSON.stringify(data))),
	// 	catchError(JokeService.handleError)
	// );

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
}
