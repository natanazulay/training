import { JokeGeneratorService } from './joke-generator.service';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { defer, of } from "rxjs";

describe('JokeGeneratorService', () => {
	let service: JokeGeneratorService;
	let httpClientSpy: jasmine.SpyObj<HttpClient>;
	let mockJokeList = {
		result:[{
			id: 'nlvsVqcOQaWezU6I18SzJQ',
			url: 'http://api.chucknorris.io/jokes/nlvsVqcOQaWezU6I18SzJQ',
			value: 'Hello Kitty has stubby arms because Chuck Norris was feeling hungry.',
			isDisplayed: false
		},
		{
			id: 'g96iRXO6TPWAgWkrWf_YRQ',
			url: 'http://api.chucknorris.io/jokes/g96iRXO6TPWAgWkrWf_YRQ',
			value: 'once upon a time Chuck Norris seen a mime"hello" said chuck the mime didnt answer so he round house kicked him to death.',
			isDisplayed: false
		},
		{
			id: '6aqcOwDJQyeMo9FvUCJjow',
			url: 'http://api.chucknorris.io/jokes/6aqcOwDJQyeMo9FvUCJjow',
			value: 'Chuck Norris and his Mom have matching tattoos. Left kuckle Right knuckle Chuck Norris . Left foot Right foot Chuck Norris. Only one difference. Above his Mom\'s hairy mat it reads Hello ! Above Chuck Norris\'s bearded Ass it simply reads Goodbye.',
			isDisplayed: false
		}
	]};

	let mockJoke = {
		id: 'nlvsVqcOQaWezU6I18SzJQ',
		url: 'http://api.chucknorris.io/jokes/nlvsVqcOQaWezU6I18SzJQ',
		value: 'Hello Kitty has stubby arms because Chuck Norris was feeling hungry.',
		isDisplayed: true
	};

	beforeEach(() => {
		httpClientSpy = jasmine.createSpyObj('httpClient', ['get']);
		service       = new JokeGeneratorService(httpClientSpy);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('generateJoke', (done: DoneFn) => {
		httpClientSpy.get.and.returnValues(of(mockJoke))
		service.generateJoke().subscribe((joke) => {
			console.log(JSON.stringify(joke) + 'maor' + JSON.stringify(mockJoke))
			expect(joke).toEqual(mockJoke);
			done();
		});
	});
	it('generateJokesFromSearch', (done: DoneFn) => {
		httpClientSpy.get.and.returnValues(of(mockJokeList))
		service.generateJokesFromSearch('hello').subscribe((jokeList) => {
			expect(jokeList).toEqual(mockJokeList['result']);
			done();
		});


	});

	function asyncError<T>(errorObject: any) {
		return defer(() => Promise.reject(errorObject));
	}
});
