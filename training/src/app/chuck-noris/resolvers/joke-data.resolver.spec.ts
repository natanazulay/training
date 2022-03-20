import { JokeDataResolver } from './joke-data.resolver';
import { JokeGeneratorService } from "../services/joke-generator.service";
import { ActivatedRouteSnapshot } from "@angular/router";

describe('JokeDataResolver', () => {
	let resolver: JokeDataResolver;
	let service: JokeGeneratorService;
	const dummyRoute = {} as ActivatedRouteSnapshot;

	beforeEach(() => {
		service  = jasmine.createSpyObj('service', ['generateJoke']);
		resolver = new JokeDataResolver(service);
	});

	it('should be created', () => {
		expect(resolver).toBeTruthy();
	});

	it('should resolve', () => {
		resolver.resolve(dummyRoute, undefined)
		expect(service.generateJoke).toHaveBeenCalledTimes(1);
	});
});