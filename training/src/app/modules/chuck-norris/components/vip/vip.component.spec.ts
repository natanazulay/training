import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipComponent } from './vip.component';
import { ChuckNorrisModule } from "../../modules/chuck-norris.module";

describe('VipComponent', () => {
	let component: VipComponent;
	let fixture: ComponentFixture<VipComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VipComponent],
			imports:[ChuckNorrisModule]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture   = TestBed.createComponent(VipComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
