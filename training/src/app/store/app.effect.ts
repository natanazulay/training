import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
	generateJoke,
	generateJokeFailed,
	generateJokeSuccess,
	getJokeList,
	getJokeListFailed,
	getJokeListSuccess
} from "./generateJoke.actions";
import { catchError, exhaustMap, map, Observable, of } from "rxjs";
import { JokeGeneratorService } from "../chuck-noris/services/joke-generator.service";
import { Joke } from "../chuck-noris/joke";

@Injectable()
export class AppEffects {
	getJokeList$ = createEffect(() => this.actions$.pipe(
			ofType(getJokeList),
			exhaustMap((action: { payload: string }) =>
				this.getJokeListFromService(action.payload)
				.pipe(
					map((res) => getJokeListSuccess({ payload: res })),
					catchError((err) => of(getJokeListFailed({ payload: err })))
				)
			)
		)
	);

	generateJoke$ = createEffect(() => this.actions$.pipe(
			ofType(generateJoke),
			exhaustMap((action: any) =>
				this.getJokeFromService()
				.pipe(
					map((res) => generateJokeSuccess({ payload: res })),
					catchError((err) => of(generateJokeFailed({ payload: err })))
				)
			)
		)
	);

	constructor(private actions$: Actions, private jokeService: JokeGeneratorService) {
	}

	private getJokeListFromService(searchedValue: string): Observable<Joke[]> {
		return this.jokeService.getJokeList(searchedValue);
	}

	private getJokeFromService(): Observable<Joke> {
		return this.jokeService.generateJoke();
	}

}