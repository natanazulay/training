import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map, mergeMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  public getUrlChanged() {
    return this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event: any) => event.url)
    );
  }

  public getRouteData() {
    return this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
    )
  }

  public getRouteParams() {
    return this.activatedRoute.queryParams
  }

  public navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}