import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeListComponent } from './joke-list.component';

describe('JokeListComponent', () => {
	let component: JokeListComponent;
	let fixture: ComponentFixture<JokeListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [JokeListComponent]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture            = TestBed.createComponent(JokeListComponent);
		component          = fixture.componentInstance;
		component.jokeList = [
			{
				id: 'nlvsVqcOQaWezU6I18SzJQ',
				url: 'http://api.chucknorris.io/jokes/nlvsVqcOQaWezU6I18SzJQ',
				value: 'Hello Kitty has stubby arms because Chuck Norris was feeling hungry.',
				isDisplayed: true
			},
			{
				id: 'g96iRXO6TPWAgWkrWf_YRQ',
				url: 'http://api.chucknorris.io/jokes/g96iRXO6TPWAgWkrWf_YRQ',
				value: 'once upon a time Chuck Norris seen a mime"hello" said chuck the mime didnt answer so he round house kicked him to death.',
				isDisplayed: true
			},
			{
				id: '6aqcOwDJQyeMo9FvUCJjow',
				url: 'http://api.chucknorris.io/jokes/6aqcOwDJQyeMo9FvUCJjow',
				value: 'Chuck Norris and his Mom have matching tattoos. Left kuckle Right knuckle Chuck Norris . Left foot Right foot Chuck Norris. Only one difference. Above his Mom\'s hairy mat it reads Hello ! Above Chuck Norris\'s bearded Ass it simply reads Goodbye.',
				isDisplayed: true
			}
		];
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
