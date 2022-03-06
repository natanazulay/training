import { Component, Input, OnInit } from '@angular/core';
import { getSearchListJokesSelector } from "../../../../store/selectors/app.selectors";
import { Joke } from "../../models/joke.modle";
import { MatTableDataSource } from "@angular/material/table";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../store/states/app.state";

@Component({
	selector: 'app-joke-list',
	templateUrl: './joke-list.component.html',
	styleUrls: ['./joke-list.component.scss'],
})
export class JokeListComponent implements OnInit {

	constructor(private store: Store<AppState>) {
	}

	@Input() public jokes: Joke[];
	public jokeClickedId: string;
	public isTableExpanded: boolean            = false;
	public jokeList: MatTableDataSource<Joke>  = new MatTableDataSource();
	public displayedJokesColumnsList: string[] = ['id', 'category', 'date_created'];

	ngOnInit(): void {
		this.store.select(getSearchListJokesSelector).subscribe(
			(jokes: Joke[]) => this.jokeList.data = jokes
		)
	}

	onClickExpended(joke: Joke): void {
		this.jokeClickedId = joke.id;
		joke.isExpanded    = !joke.isExpanded;
	}

}
