import { Component, OnInit } from '@angular/core';
import { JokeGeneratorService } from "../joke-generator.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public joke: string = '';

  constructor(private jokeService: JokeGeneratorService) { }

  generateJoke(): void{
    this.jokeService.generateJoke().subscribe(joke => this.joke = joke.value);
  }
}
