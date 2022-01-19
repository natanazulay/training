import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { JokeGeneratorComponent } from './joke-generator/joke-generator.component';
import { JokeComponent } from './joke/joke.component';

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		JokeGeneratorComponent,
		JokeComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		HttpClientModule,
		MatButtonModule,
		AppRoutingModule,
		MatCheckboxModule,
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}