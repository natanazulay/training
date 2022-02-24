import { Component, OnInit } from '@angular/core';
import { Joke } from "../joke";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-vip',
	templateUrl: './vip.component.html',
	styleUrls: ['./vip.component.scss']
})
export class VipComponent implements OnInit {
	public joke: Joke;

	constructor(private activatedRoute: ActivatedRoute) {
	}

	public ngOnInit() {
		this.joke = this.activatedRoute.snapshot.data[ 'joke' ];
	}
}