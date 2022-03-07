import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChuckNorrisModule } from "./chuck-noris/chuck-norris.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { appReducer } from "./store/app.reducer";
import { AppEffects } from "./store/app.effect";
import { EffectsModule } from "@ngrx/effects";

export const REDUCERS = {
	appState: appReducer
};

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		ChuckNorrisModule,
		BrowserAnimationsModule,
		MatTableModule,
		RouterModule,
		StoreModule.forRoot(REDUCERS),
		EffectsModule.forRoot([AppEffects]),
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}