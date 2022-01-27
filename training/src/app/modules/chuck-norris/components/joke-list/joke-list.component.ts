import { Joke } from "../../models/joke.modle";
import { MatTableDataSource } from "@angular/material/table";
import { Component, Input, OnInit} from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";


@Component({
	selector: 'app-joke-list',
	templateUrl: './joke-list.component.html',
	styleUrls: ['./joke-list.component.scss'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	],

})
export class JokeListComponent implements OnInit {

	@Input() jokes: Joke[];
	public isTableExpanded: boolean            = false;
	public jokeList: MatTableDataSource<Joke>  = new MatTableDataSource();
	public displayedJokesColumnsList: string[] = ['id', 'category', 'date_created'];

	ngOnInit(): void {
		this.jokeList.data = this.jokes;
	}

	onClickExpended(joke: Joke): void {
		const jokeId = joke.id;
		this.jokeList.data.map((joke: Joke) => {
			(joke.id !== jokeId) ?
				joke.isExpanded = false :
				joke.isExpanded = !joke.isExpanded;
		})
	}
}
