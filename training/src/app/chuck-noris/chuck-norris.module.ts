import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckNorrisMain } from "../chuck-noris-main/chuck-norris-main.component";
import { JokeGeneratorComponent } from "../joke-generator/joke-generator.component";
import { JokeComponent } from "../joke/joke.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../app-routing.module";


@NgModule({
  declarations: [
    ChuckNorrisMain,
    JokeGeneratorComponent,
    JokeComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  exports: [ChuckNorrisMain],
})
export class ChuckNorrisModule { }
