import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Joke } from "./joke";

@Injectable({
	providedIn: 'root'
})
export class RandomJokeService {

	private RandomJokeUrl = 'https://api.chucknorris.io/jokes/random';

	constructor(private http: HttpClient) {
	}

	public getJoke(): Observable<Joke> {
		return this.http.get<Joke>(this.RandomJokeUrl).pipe(
			tap(joke => console.log('JOKE : ', JSON.stringify(joke))),
			catchError(RandomJokeService.handleError)
		);
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
}
