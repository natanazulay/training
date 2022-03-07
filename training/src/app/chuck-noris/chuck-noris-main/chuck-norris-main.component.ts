import { Component, OnInit } from '@angular/core';
import { JokeGeneratorService } from "../services/joke-generator.service";
import { Observable, of } from "rxjs";
import { Joke } from "../joke";
import { RoutingService } from "../services/routing.service";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/state";
import { selectJoke, selectJokeList } from "../../store/generateJoke.selector";
import { generateJoke, getJokeList } from "../../store/generateJoke.actions";

@Component({
	selector: 'app-chuck-norris-main',
	templateUrl: './chuck-norris-main.component.html',
	styleUrls: ['./chuck-norris-main.component.scss']
})

export class ChuckNorrisMain implements OnInit {
	public jokeList$: Observable<Joke[]> = this.store.select(state => state.jokeList);
	public joke$: Observable<Joke>       = this.store.select(state => state.joke);
	public isSearchMode: boolean         = false;
	public isVipMode: boolean;
	public searchInput: string;

	constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute,
				private routingService: RoutingService, private jokeService: JokeGeneratorService) {
	}

	public ngOnInit(): void {
		this.isSearchMode = this.activatedRoute.snapshot.data[ 'isSearchMode' ];
		this.store.select(selectJoke).subscribe((joke: Joke) => {
			this.joke$ = of(joke);
		})

		this.store.select(selectJokeList).subscribe((jokeList: Joke[]) => {
			this.jokeList$ = of(jokeList);
		})
	}

	public getJokesFromSearch(searchedValue: string): void {
		if (this.searchInput != searchedValue) {
			this.store.dispatch(getJokeList({ payload: searchedValue }));
		}
		this.searchInput = searchedValue;
	}

	onGenerateJokeClick(): void {
		this.store.dispatch(generateJoke());
	}

	navigate(state: string): void {
		this.routingService.navigate(state);
	}
}