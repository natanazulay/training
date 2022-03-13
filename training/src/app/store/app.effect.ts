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
import { catchError, exhaustMap, map, of } from "rxjs";
import { JokeGeneratorService } from "../chuck-noris/services/joke-generator.service";

@Injectable()
export class AppEffects {
	constructor(private actions$: Actions, private jokeService: JokeGeneratorService) {
	}

	getJokeList$ = createEffect(() => this.actions$.pipe(
			ofType(getJokeList),
			exhaustMap((action: { payload: string }) =>
				this.jokeService.getJokeList(action.payload)
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
				this.jokeService.generateJoke()
				.pipe(
					map((res) => generateJokeSuccess({ payload: res })),
					catchError((err) => of(generateJokeFailed({ payload: err })))
				)
			)
		)
	);
}