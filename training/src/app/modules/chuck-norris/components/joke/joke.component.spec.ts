import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JokeComponent } from './joke.component';
import { Joke } from "../../models/joke.modle";
import { By } from "@angular/platform-browser";

describe('JokeComponent', () => {
	let component: JokeComponent;
	let fixture: ComponentFixture<JokeComponent>;
	const randomJoke: Joke = {
		categories: [],
		createDate: "2020-01-05 13:42:28.664997",
		iconUrl: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
		id: "pWFcPdIQQNCq8pMINvOgHQ",
		updatedDate: "2020-01-05 13:42:28.664997",
		url: "https://api.chucknorris.io/jokes/pWFcPdIQQNCq8pMINvOgHQ",
		value: "Chuck Norris had a razor named after him, made by Gillette for women. He is the best a woman can get.",
		isExpanded: false
	}

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [JokeComponent]
		}).compileComponents();

		fixture   = TestBed.createComponent(JokeComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render joke', () => {
		component.joke = randomJoke;
		fixture.detectChanges();
		let jokeElement = fixture.debugElement.query(By.css('.joke-value')).nativeElement;
		expect(jokeElement).toBeTruthy();
	});

	it('joke should be undefined', () => {
		component.joke = undefined;
		fixture.detectChanges();
		let jokeElement = fixture.debugElement.query(By.css('.joke-value'))
		expect(jokeElement).toBeNull();
	});
});
