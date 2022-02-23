import { Component, OnInit } from '@angular/core';
import { Joke } from "../../models/joke.modle";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-vip',
	templateUrl: './vip.component.html',
	styleUrls: ['./vip.component.scss']
})
export class VipComponent implements OnInit {
	// @Input() public joke: Joke
	public vipJoke: Joke;

	constructor(private route: ActivatedRoute) {
	}

	public ngOnInit() {
		// this.isSearchMode = this.route.snapshot.data[ 'isSearchMode' ];
		// this.isVipMode    = this.route.snapshot.data[ 'isVipMode' ];
		// this.isNotVipMode = this.route.snapshot.data[ 'isNotVipMode' ];
		this.vipJoke = this.route.snapshot.data[ 'vipJoke' ];
	}
}
