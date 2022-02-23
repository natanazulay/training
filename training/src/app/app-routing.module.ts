import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VipGuard } from "./chuck-noris/vip.guard";
import { JokeDataResolver } from "./chuck-noris/joke-data.resolver";
import { PageNotFoundComponent } from "./chuck-noris/pagenotfound/page-not-found.component";
import { ChuckNorrisMain } from "./chuck-noris/chuck-noris-main/chuck-norris-main.component";
import { VipComponent } from "./chuck-noris/vip/vip.component";

const routes: Routes = [
	{ path: '', redirectTo: '/random', pathMatch: 'full' },
	{
		path: 'random',
		component: ChuckNorrisMain,
		data: {
			isSearchMode: false
		}
	},
	{
		path: 'search',
		component: ChuckNorrisMain,
		data: {
			isSearchMode: true
		}
	},
	{
		path: 'vip',
		component: VipComponent,
		canActivate: [VipGuard],
		resolve: [JokeDataResolver],
		data: {
			isVipMode: true
		}
	},
	{ path: 'not-vip', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule {}
