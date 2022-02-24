import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VipGuard } from "./chuck-noris/guards/vip.guard";
import { JokeDataResolver } from "./chuck-noris/resolvers/joke-data.resolver";
import { UnauthorizedPage } from "./chuck-noris/unauthorized-page/unauthorized-page";
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
		resolve: {joke: JokeDataResolver},
		data: {
			isVipMode: true
		}
	},
	{ path: 'not-vip', component: UnauthorizedPage }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule {}
