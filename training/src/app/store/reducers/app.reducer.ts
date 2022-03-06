import { AppState, initialAppState } from "../states/app.state";
import { createReducer, on } from "@ngrx/store";
import { AppActions } from "../actions/app.actions";

const _appReducer = createReducer(
	initialAppState,
	on(AppActions.GET_RANDOM_JOKE_SUCCESS, (state, action): AppState => ({
		...state,
		randomJoke: action.payload,
		randomJokeError: ''
	})),
	on(AppActions.GET_RANDOM_JOKE_FAILED, (state, action): AppState => ({
		...state,
		randomJokeError: action.payload
	})),
	on(AppActions.GET_SEARCH_JOKES_SUCCESS, (state, action): AppState => ({
		...state,
		jokes: action.payload,
		searchJokesError: ''
	})),
	on(AppActions.GET_SEARCH_JOKES_FAILED, (state, action): AppState => ({
		...state,
		searchJokesError: action.payload
	}))
);

export function appReducer(state, action) {
	return _appReducer(state, action)
}
