import { Injectable } from '@angular/core';
import {
	Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { JokeService } from "../services/joke/joke.service";
import { Joke } from "../models/joke.modle";

@Injectable({
	providedIn: 'root'
})
export class VipResolver implements Resolve<Joke> {

	constructor(private jokeService: JokeService) {
	}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Joke> {
		return this.jokeService.getRandomJoke();
	}
}
