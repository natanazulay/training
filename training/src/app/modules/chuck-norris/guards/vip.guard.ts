import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingService } from "../services/routes/routing.service";

@Injectable({
	providedIn: 'root'
})
export class VipGuard implements CanActivate {

	constructor(private routingService: RoutingService) {
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (Math.random() < 0.5) {
			return true
		} else {
			this.routingService.navigate('not-vip');
			return false;
		}
	}

}
