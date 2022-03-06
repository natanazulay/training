import { Component, Input, OnChanges } from '@angular/core';
import { Joke } from "../../models/joke.modle";
import { MatTableDataSource } from "@angular/material/table";

@Component({
	selector: 'app-joke-list',
	templateUrl: './joke-list.component.html',
	styleUrls: ['./joke-list.component.scss'],
})
export class JokeListComponent implements OnChanges {

	@Input() public jokes: Joke[];
	public jokeClickedId: string;
	public isTableExpanded: boolean            = false;
	public jokeList: MatTableDataSource<Joke>  = new MatTableDataSource();
	public displayedJokesColumnsList: string[] = ['id', 'category', 'date_created'];

	public ngOnChanges() {
		this.jokeList.data = this.jokes;
	}

	onClickExpended(joke: Joke): void {
		this.jokeClickedId = joke.id;
		joke.isExpanded    = !joke.isExpanded;
	}

}
