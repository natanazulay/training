import { TestBed } from '@angular/core/testing';

import { VipResolver } from './vip.resolver';

describe('VipResolver', () => {
	let resolver: VipResolver;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		resolver = TestBed.inject(VipResolver);
	});

	it('should be created', () => {
		expect(resolver).toBeTruthy();
	});
});
