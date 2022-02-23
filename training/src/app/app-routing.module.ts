import { NgModule } from '@angular/core';
import {
	ChuckNorrisMainComponent
} from "./modules/chuck-norris/components/chuck-norris-main/chuck-norris-main.component";
import { RouterModule, Routes } from '@angular/router';
import { VipGuard } from "./modules/chuck-norris/guards/vip.guard";
import { VipResolver } from "./modules/chuck-norris/resolvers/vip.resolver";
import { NotVipComponent } from "./modules/chuck-norris/components/not-vip/not-vip.component";
import { VipComponent } from "./modules/chuck-norris/components/vip/vip.component";

const routes: Routes = [
	{ path: '', redirectTo: '/random', pathMatch: 'full' },
	{ path: 'random', component: ChuckNorrisMainComponent, data: { isSearchMode: false } },
	{ path: 'search', component: ChuckNorrisMainComponent, data: { isSearchMode: true } },
	{ path: 'not-vip', component: NotVipComponent },
	{
		path: 'vip',
		component: VipComponent,
		canActivate: [VipGuard],
		resolve: { vipJoke: VipResolver },
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
