import { createAction, props } from '@ngrx/store';
import { Joke } from "../../modules/chuck-norris/models/joke.modle";

export const AppActions = {

	GET_RANDOM_JOKE: createAction('AppActionsTypes.GET_RANDOM_JOKE'),
	GET_RANDOM_JOKE_SUCCESS: createAction('AppActionsTypes.GET_RANDOM_JOKE_SUCCESS', props<{ payload: Joke }>()),
	GET_RANDOM_JOKE_FAILED: createAction('AppActionsTypes.GET_RANDOM_JOKE_FAILED', props<{ payload: string }>()),

	GET_SEARCH_JOKES: createAction('AppActionsTypes.GET_SEARCH_JOKES', props<{ payload: string }>()),
	GET_SEARCH_JOKES_SUCCESS: createAction('AppActionsTypes.GET_SEARCH_JOKES_SUCCESS', props<{ payload: Joke[] }>()),
	GET_SEARCH_JOKES_FAILED: createAction('AppActionsTypes.GET_SEARCH_JOKES_FAILED', props<{ payload: string }>()),

}
