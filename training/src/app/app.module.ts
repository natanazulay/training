import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChuckNorrisModule } from "./modules/chuck-norris/modules/chuck-norris.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [AppComponent],
	imports: [ChuckNorrisModule, BrowserAnimationsModule],
	providers: [],
	exports: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
