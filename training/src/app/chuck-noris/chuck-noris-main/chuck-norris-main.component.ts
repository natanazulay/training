import { Component, OnInit } from '@angular/core';
import { JokeGeneratorService } from "../services/joke-generator.service";
import { Observable } from "rxjs";
import { Joke } from "../joke";
import { RoutingService } from "../services/routing.service";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-chuck-norris-main',
	templateUrl: './chuck-norris-main.component.html',
	styleUrls: ['./chuck-norris-main.component.scss']
})

export class ChuckNorrisMain implements OnInit {
	public jokeList$: Observable<Joke[]>;
	public joke$: Observable<Joke>;
	public isSearchMode: boolean = false;
	public isVipMode: boolean;
	public searchInput: string;

	constructor(private activatedRoute: ActivatedRoute, private routingService: RoutingService, private jokeService: JokeGeneratorService) {
	}

	public ngOnInit(): void {
		this.isSearchMode = this.activatedRoute.snapshot.data['isSearchMode'];
	}

	public getJokesFromSearch(searchedValue: string): void {
		if (this.searchInput != searchedValue) {
			this.jokeList$ = this.jokeService.getJokeList(searchedValue);
		}
		this.searchInput = searchedValue;
	}

	onGenerateJokeClick(): void {
		this.joke$ = this.jokeService.generateJoke();
	}

	navigate(state: string) : void{
		this.routingService.navigate(state);
	}
}