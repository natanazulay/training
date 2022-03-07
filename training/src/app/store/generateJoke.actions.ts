import { createAction, props } from '@ngrx/store';
import { Joke } from "../chuck-noris/joke";

export const generateJoke        = createAction('generateJoke');
export const generateJokeSuccess = createAction('generateJoke success', props<{ payload: Joke }>());
export const generateJokeFailed  = createAction('generateJoke failed', props<{ payload: string }>());
export const getJokeList         = createAction('getJokeList', props<{ payload: any }>());
export const getJokeListSuccess  = createAction('getJokeList success', props<{ payload: Joke[] }>());
export const getJokeListFailed   = createAction('getJokeList failed', props<{ payload: string }>());