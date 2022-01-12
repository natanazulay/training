import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import { Joke } from "./joke";


@Injectable({ providedIn: 'root' })
export class JokeGeneratorService {
  private jokeUrl = "https://api.chucknorris.io/jokes/random";

  constructor(private http: HttpClient) { }

  generateJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.jokeUrl);
  }

}
