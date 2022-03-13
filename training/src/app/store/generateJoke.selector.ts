import { createSelector } from "@ngrx/store";
import { AppState } from "./state";

export const getJokeState     = (state: any) => state.appState as AppState;

export const selectJoke = createSelector(
	getJokeState,
	(state: AppState) => state.joke
);

export const selectJokeList = createSelector(
	getJokeState,
	(state: AppState) => state.jokeList
)