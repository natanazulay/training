import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Joke } from "../joke";
import { animate, state, style, transition, trigger } from '@angular/animations';


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
	@Input() public jokeList: Joke[];
	public isDisplayed: boolean;
	public jokeListTable: MatTableDataSource<Joke> = new MatTableDataSource();
	public columnsToDisplay: string[]              = ['id', 'category', 'date_created'];
	expandedElement: Joke | null;

	ngOnInit(): void {
		this.jokeListTable.data = this.jokeList;
	}
}

