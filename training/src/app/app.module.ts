import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChuckNorrisModule } from "./chuck-noris/chuck-norris.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		ChuckNorrisModule,
		BrowserAnimationsModule,
		MatTableModule,
		RouterModule
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}