import { Component, OnInit } from '@angular/core';
import { Joke } from "../../models/joke.modle";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-vip',
	templateUrl: './vip.component.html',
	styleUrls: ['./vip.component.scss']
})
export class VipComponent implements OnInit {

	public vipJoke: Joke;

	constructor(private route: ActivatedRoute) {
	}

	public ngOnInit() {
		this.vipJoke = this.route.snapshot.data[ 'vipJoke' ];
	}
}
