import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChuckNorrisModule } from "./modules/chuck-norris/modules/chuck-norris.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from "./store/effects/app.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducer } from "./store/reducers/app.reducer";

export const REDUCERS = {
	appState: appReducer
}

@NgModule({
	declarations: [AppComponent],
	imports: [ChuckNorrisModule, BrowserAnimationsModule, RouterModule,
			  StoreModule.forRoot(REDUCERS),
			  EffectsModule.forRoot([AppEffects]),
			  StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule {}
