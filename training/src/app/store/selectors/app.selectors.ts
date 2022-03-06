import {  createSelector } from "@ngrx/store";
import { AppState } from "../states/app.state";

export const getAppState = (state: any) => state.appState as AppState;

export const getRandomJokeSelector = createSelector(
	getAppState,
	(state: AppState) => state.randomJoke
);

export const getSearchListJokesSelector = createSelector(
	getAppState,
	(state: AppState) => [...state.jokes]
);

