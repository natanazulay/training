import { createReducer, on } from '@ngrx/store';
import {
	generateJoke,
	generateJokeFailed,
	generateJokeSuccess,
	getJokeList, getJokeListFailed,
	getJokeListSuccess
} from "./generateJoke.actions";
export const initialAppState = {
	joke: undefined,
	jokeList: [],
	jokeErr: '',
	jokeListErr: ''
};

const _appReducer = createReducer(
	initialAppState,
	on(getJokeList, (state, action) => {
		return { ...state, jokeList: action.payload }
	}),
	on(getJokeListSuccess, (state, action) => {
		return {...state, jokeList: action.payload }
	}),
	on(getJokeListFailed, (state, action) => {
		return {...state, jokeListErr: action.payload }
	}),
	on(generateJoke, (state) => { return {...state}}),
	on(generateJokeSuccess, (state, action) => {
		return { ...state, joke: action.payload }
	}),
	on(generateJokeFailed, (state, action) => {
		return { ...state, jokeErr: action.payload}
	}),
)

export function appReducer(state, action) {
	return _appReducer(state, action);
}