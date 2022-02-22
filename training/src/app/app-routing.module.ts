import { NgModule } from '@angular/core';
import {
	ChuckNorrisMainComponent
} from "./modules/chuck-norris/components/chuck-norris-main/chuck-norris-main.component";
import { RouterModule, Routes } from '@angular/router';
import { VipGuard } from "./modules/chuck-norris/guards/vip.guard";
import { VipResolver } from "./modules/chuck-norris/resolvers/vip.resolver";

const routes: Routes = [
	{ path: '', redirectTo: '/random', pathMatch: 'full' },
	{ path: 'random', component: ChuckNorrisMainComponent, data: { isSearchMode: false } },
	{ path: 'search', component: ChuckNorrisMainComponent, data: { isSearchMode: true } },
	{ path: 'not-vip', component: ChuckNorrisMainComponent, data: { isNotVipMode: true } },
	{
		path: 'vip',
		component: ChuckNorrisMainComponent,
		canActivate: [VipGuard],
		resolve: { vipJoke: VipResolver },
		data: { isVipMode: true }
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
