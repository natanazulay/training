import { Injectable } from '@angular/core';
import { map, exhaustMap, concatMap } from 'rxjs/operators';
import { catchError, of } from "rxjs";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppActions } from "../actions/app.actions";
import { JokeService } from "../../modules/chuck-norris/services/joke/joke.service";
import { Joke } from "../../modules/chuck-norris/models/joke.modle";


@Injectable()
export class AppEffects {

	constructor(private actions$: Actions, private jokeService: JokeService) {
	}

	RandomJoke$ = createEffect(() =>
		this.actions$.pipe(
			ofType(AppActions.GET_RANDOM_JOKE),
			exhaustMap(() =>
				this.jokeService.getRandomJoke().pipe(
					map((joke: Joke) => AppActions.GET_RANDOM_JOKE_SUCCESS({ payload: joke })),
					catchError((err) => of(AppActions.GET_RANDOM_JOKE_FAILED({ payload: err })))
				)
			)
		)
	)

	JokeBySearchKey$ = createEffect(() =>
		this.actions$.pipe(
			ofType(AppActions.GET_SEARCH_JOKES),
			concatMap((action: any) =>
				this.jokeService.getSearchListJokes(action.payload).pipe(
					map((joke: Joke[]) => AppActions.GET_SEARCH_JOKES_SUCCESS({ payload: joke })),
					catchError((err) => of(AppActions.GET_SEARCH_JOKES_FAILED({ payload: err })))
				)
			)
		)
	)
}
