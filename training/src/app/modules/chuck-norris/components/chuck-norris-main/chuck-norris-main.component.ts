import { Component, OnInit } from '@angular/core';
import { JokeService } from "../../services/joke/joke.service";
import { Observable } from "rxjs";
import { Joke } from "../../models/joke.modle";
import { RoutingService } from "../../services/routes/routing.service";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-chuck-norris-main',
	templateUrl: './chuck-norris-main.component.html',
	styleUrls: ['./chuck-norris-main.component.scss']
})
export class ChuckNorrisMainComponent implements OnInit {

	public joke$: Observable<Joke>;
	public vipJoke: Joke;
	public jokes$: Observable<Joke[]>
	public isSearchMode: boolean;
	public isVipMode: boolean;
	public isNotVipMode: boolean;
	private searchKey: string;

	constructor(private jokeService: JokeService, private routingService: RoutingService,
				private route: ActivatedRoute) {
	}

	public toggleJokeMode(url: string): void {
		this.routingService.navigate(url);
	}

	public ngOnInit() {
		this.isSearchMode = this.route.snapshot.data[ 'isSearchMode' ];
		this.isVipMode    = this.route.snapshot.data[ 'isVipMode' ];
		this.isNotVipMode = this.route.snapshot.data[ 'isNotVipMode' ];
		this.vipJoke      = this.route.snapshot.data[ 'vipJoke' ];
	}

	public generateRandomJoke(): void {
		this.joke$ = this.jokeService.getRandomJoke();
	}

	public generateSearchJoke(searchKey: string): void {
		if (searchKey !== this.searchKey) {
			this.jokes$ = this.jokeService.getSearchListJokes(searchKey);
		}
		this.searchKey = searchKey;
	}

}

