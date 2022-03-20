import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Joke } from "../joke";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Store } from "@ngrx/store";
import { AppState } from "../../store/state";
import { Subject } from "rxjs";


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
	public jokeListTable: MatTableDataSource<Joke> = new MatTableDataSource();
	public columnsToDisplay: string[]              = ['id', 'category', 'created_at'];
	public expandedElement: Joke;
	public untilDestroy: Subject<void>             = new Subject<void>();

	constructor() {
	}

	ngOnInit(): void {
		this.jokeListTable.data = this.jokeList;
	}

	public ngOnDestroy() {
		this.untilDestroy.next();
	}
}

