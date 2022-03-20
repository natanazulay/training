import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeGeneratorComponent } from './joke-generator.component';
import { ChuckNorrisModule } from "../chuck-norris.module";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppEffects } from "../../store/app.effect";
import { REDUCERS } from "../../app.module";

describe('JokeGeneratorComponent', () => {
	let component: JokeGeneratorComponent;
	let fixture: ComponentFixture<JokeGeneratorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [JokeGeneratorComponent],
			imports: [
				StoreModule.forRoot(REDUCERS),
				EffectsModule.forRoot([AppEffects]), ChuckNorrisModule
			]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture            = TestBed.createComponent(JokeGeneratorComponent);
		component          = fixture.componentInstance;
		component.jokeList = []
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('generateJokesSearched should emit', () => {
		const spy = spyOn(component.generateJokesSearched, 'emit')
		component.onGenerateJokesFromSearch('bye');
		expect(spy).toHaveBeenCalledWith('bye');
	});

	it('generateRandomJokeClicked should emit', () => {
		const spy              = spyOn(component.generateRandomJokeClicked, 'emit')
		component.isSearchMode = false;
		component.onGenerateJokesFromClick('bye');
		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('generateJokesClicked should emit', () => {
		const spy              = spyOn(component.generateJokesClicked, 'emit')
		component.isSearchMode = true;
		component.onGenerateJokesFromClick('bye');
		expect(spy).toHaveBeenCalledWith('bye');
	});
});
