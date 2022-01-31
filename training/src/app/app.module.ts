import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChuckNorrisModule } from "./chuck-noris/chuck-norris.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		ChuckNorrisModule,
		BrowserAnimationsModule,
		MatTableModule
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}