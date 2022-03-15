import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChuckNorrisModule } from "../../modules/chuck-norris.module";
import { JokeListComponent } from "./joke-list.component";
import { Joke } from "../../models/joke.modle";

describe('JokeListComponent', () => {
	let component: JokeListComponent;
	let fixture: ComponentFixture<JokeListComponent>;
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

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [JokeListComponent],
			imports: [ChuckNorrisModule]
		})
		.compileComponents();
		fixture   = TestBed.createComponent(JokeListComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('check onClickExpended functionality', () => {
		component.onClickExpended(randomJoke);
		fixture.detectChanges();
		expect(component.jokeClickedId).toEqual(randomJoke.id);
		expect(randomJoke.isExpanded).toBeTruthy();
	});
});
