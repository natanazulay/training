import { Joke } from "../../modules/chuck-norris/models/joke.modle";

export interface AppState {
	randomJoke: Joke,
	jokes: Joke[],
	randomJokeError: string;
	searchJokesError: string;
}

export const initialAppState: AppState = {
	randomJoke: undefined,
	jokes: [],
	randomJokeError: '',
	searchJokesError: ''
};
