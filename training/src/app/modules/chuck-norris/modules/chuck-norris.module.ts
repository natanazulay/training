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
import { SearchComponent } from "../components/search/search.component";
import { JokeListComponent } from "../components/joke-list/joke-list.component";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from "@angular/material/list";


@NgModule({
	declarations: [
		ChuckNorrisMainComponent,
		JokeComponent,
		JokeGeneratorComponent,
		SearchComponent,
		JokeListComponent
	],
	imports: [
		CommonModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatDividerModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatOptionModule,
		MatSelectModule,
		MatIconModule,
		ReactiveFormsModule,
		MatCardModule,
		MatInputModule,
		MatFormFieldModule,
		MatTableModule,
		MatListModule
	],
	exports: [
		ChuckNorrisMainComponent
	]
})
export class ChuckNorrisModule {}
