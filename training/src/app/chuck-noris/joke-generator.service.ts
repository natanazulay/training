import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpInterceptor,HttpHandler,HttpRequest,HttpResponse} from "@angular/common/http";
import { catchError, map, Observable, pluck, Subject, tap, throwError } from "rxjs";
import { Joke } from "./joke";


@Injectable({ providedIn: 'root' })
export class JokeGeneratorService {
	public searchInput: Subject<string> = new Subject<string>();
	private jokeUrl                     = "https://api.chucknorris.io/jokes/random";
	private searchJokeUrl               = 'https://api.chucknorris.io/jokes/search';

	constructor(private http: HttpClient) {
	}

	generateJoke(): Observable<Joke> {
		return this.http.get<Joke>(this.jokeUrl);
	}

	getJokeList(inputKey: string): Observable<any> {
		return this.http.get<any>(this.searchJokeUrl, { params: { query: inputKey } })
		.pipe(
			pluck('result'),
			map((data) => data.slice(0,10)),
			catchError(this.handleError),
		);
	}

	handleError(error:  HttpErrorResponse) {
		let errorMessage = '';
		if (error.error instanceof ErrorEvent) {
			errorMessage = error.error.message;
		} else {
			errorMessage = error.status + '\n' + error.error.message;
		}
		window.alert(errorMessage);
		return throwError(errorMessage);
	}
}