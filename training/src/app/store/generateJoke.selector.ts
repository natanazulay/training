import { createSelector } from "@ngrx/store";
import { AppState } from "./state";

export const getJokeState     = (state: any) => state.appState as AppState;
export const getJokeListState = (state: any) => state.appState as AppState;

export const selectJoke = createSelector(
	getJokeState,
	(state: AppState) => state.joke
);

export const selectJokeList = createSelector(
	getJokeListState,
	(state: AppState) => state.jokeList
)