import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent{
  @Input() joke: string = '';
  @Output() getJoke : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  onNotify(): void{
    this.getJoke.emit(this.joke);
  }
}
