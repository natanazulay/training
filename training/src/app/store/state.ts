import { Joke } from "../chuck-noris/joke";

export interface AppState {
	joke: Joke,
	jokeList: Joke[],
	jokeErr: string,
	jokeListErr: string;
}