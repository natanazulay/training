import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Joke } from "../joke";
import { JokeGeneratorService } from "../services/joke-generator.service";

@Injectable({
	providedIn: 'root'
})
export class JokeDataResolver implements Resolve<Joke> {

	constructor(private jokeService: JokeGeneratorService) {
	}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Joke> {
		return this.jokeService.generateJoke();
	}
}