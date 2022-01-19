import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckNorrisMainComponent } from "../components/chuck-norris-main/chuck-norris-main.component";
import { JokeComponent } from "../components/joke/joke.component";
import { JokeGeneratorComponent } from "../components/joke-generator/joke-generator.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatInputModule } from "@angular/material/input";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
	declarations: [
		ChuckNorrisMainComponent,
		JokeComponent,
		JokeGeneratorComponent
	],
	imports: [
		CommonModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatDividerModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatInputModule,
		MatOptionModule,
		MatSelectModule,
	],
	exports: [
		ChuckNorrisMainComponent
	]
})
export class ChuckNorrisModule {}
