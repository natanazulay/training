import { RoutingService } from './routing.service';
import { ActivatedRoute, Router } from "@angular/router";

describe('RoutingService', () => {
	let service: RoutingService;
	let activatedRoute: ActivatedRoute;
	let router: Router;

	beforeEach(() => {
		activatedRoute = jasmine.createSpyObj('activatedRoute', ['queryParams']);
		router         = jasmine.createSpyObj('router', ['navigateByUrl', 'events'])
		service        = new RoutingService(activatedRoute, router);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('check navigate function', () => {
		service.navigate('random');
		expect(router.navigateByUrl).toHaveBeenCalledOnceWith('random');
	});

});