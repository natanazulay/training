import { Component, OnInit } from '@angular/core';
import { getRandomJokeSelector } from "../../../../store/selectors/app.selectors";
import { Observable } from "rxjs";
import { Joke } from "../../models/joke.modle";
import { RoutingService } from "../../services/routes/routing.service";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../store/states/app.state";
import { AppActions } from "../../../../store/actions/app.actions";

@Component({
	selector: 'app-chuck-norris-main',
	templateUrl: './chuck-norris-main.component.html',
	styleUrls: ['./chuck-norris-main.component.scss']
})

export class ChuckNorrisMainComponent implements OnInit {

	public joke$: Observable<Joke>;
	public isSearchMode: boolean;
	private searchKey: string;

	constructor(private routingService: RoutingService, private route: ActivatedRoute, private store: Store<AppState>) {
	}

	public ngOnInit() {
		this.isSearchMode = this.route.snapshot.data[ 'isSearchMode' ];
		this.joke$        = this.store.select(getRandomJokeSelector)
	}

	public toggleJokeMode(url: string): void {
		this.routingService.navigate(url);
	}

	public generateRandomJoke(): void {
		this.store.dispatch(AppActions.GET_RANDOM_JOKE())
	}

	public generateSearchJoke(searchKey: string): void {
		if (searchKey !== this.searchKey) {
			this.store.dispatch(AppActions.GET_SEARCH_JOKES({ payload: searchKey }))
		}
		this.searchKey = searchKey;
	}

}

