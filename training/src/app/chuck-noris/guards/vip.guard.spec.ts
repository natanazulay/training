import { VipGuard } from './vip.guard';
import { RoutingService } from "../services/routing.service";
import { ActivatedRouteSnapshot } from "@angular/router";

describe('VipGuard', () => {
	let guard: VipGuard;
	let routingService: RoutingService;
	const dummyRoute = {} as ActivatedRouteSnapshot;

	beforeEach(() => {
		routingService = jasmine.createSpyObj('routingService', ['navigate'])
		guard          = new VipGuard(routingService);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});

	it('check route access', () => {
		const canActivate = guard.canActivate(dummyRoute, undefined); // [4]
		if (guard.hasPermission) {
			expect(canActivate).toBeTrue();
		} else {
			expect(canActivate).toBeFalse();
		}
	});
});