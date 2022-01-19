import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChuckNorrisModule } from "./modules/chuck-norris/modules/chuck-norris.module";

@NgModule({
	declarations: [AppComponent],
	imports: [ChuckNorrisModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
