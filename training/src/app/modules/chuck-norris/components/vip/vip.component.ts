import { Component, Input } from '@angular/core';
import { Joke } from "../../models/joke.modle";

@Component({
	selector: 'app-vip',
	templateUrl: './vip.component.html',
	styleUrls: ['./vip.component.scss']
})
export class VipComponent {
	@Input() public joke: Joke
}
