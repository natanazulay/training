import { createReducer, on } from '@ngrx/store';
import { generateJokeFailed, generateJokeSuccess, getJokeListFailed, getJokeListSuccess } from "./generateJoke.actions";
import { initialAppState } from "./state";

const _appReducer = createReducer(
	initialAppState,
	on(getJokeListSuccess, (state, action) => {
		return { ...state, jokeList: action.payload }
	}),
	on(getJokeListFailed, (state, action) => {
		return { ...state, jokeListErr: action.payload }
	}),
	on(generateJokeSuccess, (state, action) => {
		return { ...state, joke: action.payload }
	}),
	on(generateJokeFailed, (state, action) => {
		return { ...state, jokeErr: action.payload }
	}),
)

export function appReducer(state, action) {
	return _appReducer(state, action);
}