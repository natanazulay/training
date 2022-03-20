import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedPage } from './unauthorized-page';

describe('PagenotfoundComponent', () => {
	let component: UnauthorizedPage;
	let fixture: ComponentFixture<UnauthorizedPage>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [UnauthorizedPage]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture   = TestBed.createComponent(UnauthorizedPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
