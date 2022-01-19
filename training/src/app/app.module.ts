import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChuckNorrisModule } from "./chuck-noris/chuck-norris.module";

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		ChuckNorrisModule
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}