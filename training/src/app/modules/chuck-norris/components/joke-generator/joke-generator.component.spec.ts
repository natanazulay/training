import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JokeGeneratorComponent } from './joke-generator.component';
import { ChuckNorrisModule } from "../../modules/chuck-norris.module";

describe('JokeGeneratorComponent', () => {
	let component: JokeGeneratorComponent;
	let fixture: ComponentFixture<JokeGeneratorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [JokeGeneratorComponent],
			imports: [ChuckNorrisModule]
		})
		.compileComponents();
		fixture   = TestBed.createComponent(JokeGeneratorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should emit on click', () => {
		spyOn(component.generateJokeWasSearch, 'emit').and.callThrough();
		let searchKey = 'rew'
		component.onSearch(searchKey)
		expect(component.generateJokeWasSearch.emit).toHaveBeenCalledWith(searchKey);
	});
});
