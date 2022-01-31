import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckNorrisMain } from "./chuck-noris-main/chuck-norris-main.component";
import { JokeGeneratorComponent } from "./joke-generator/joke-generator.component";
import { JokeComponent } from "./joke/joke.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../app-routing.module";
import { SearchComponent } from "./search/search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatInputModule } from "@angular/material/input";
import { JokeListComponent } from "./joke-list/joke-list.component";


@NgModule({
	declarations: [
		ChuckNorrisMain,
		JokeGeneratorComponent,
		JokeComponent,
		SearchComponent,
		JokeListComponent
	],
	imports: [
		MatButtonModule,
		MatCheckboxModule,
		CommonModule,
		BrowserAnimationsModule,
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatTableModule,
		MatInputModule,
		ReactiveFormsModule,
	],
	exports: [ChuckNorrisMain],
})
export class ChuckNorrisModule {}
