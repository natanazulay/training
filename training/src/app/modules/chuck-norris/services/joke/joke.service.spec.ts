import { JokeService } from './joke.service';
import { HttpClient } from "@angular/common/http";
import { Joke } from "../../models/joke.modle";
import { of } from "rxjs";

describe('JokeService', () => {
	let service: JokeService;
	let httpClientSpy: jasmine.SpyObj<HttpClient>;
	const randomJoke  = {
		categories: [],
		created_at: "2020-01-05 13:42:28.664997",
		icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
		id: "pWFcPdIQQNCq8pMINvOgHQ",
		updated_at: "2020-01-05 13:42:28.664997",
		url: "https://api.chucknorris.io/jokes/pWFcPdIQQNCq8pMINvOgHQ",
		value: "Chuck Norris had a razor named after him, made by Gillette for women. He is the best a woman can get."
	}
	const searchJokes = {
		total: 101,
		result: [
			{
				categories: [
					"explicit"
				],
				created_at: "2020-01-05 13:42:18.823766",
				icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
				id: "gixH2ZhOQ-SsmwtrSJPdwQ",
				updated_at: "2020-01-05 13:42:18.823766",
				url: "https://api.chucknorris.io/jokes/gixH2ZhOQ-SsmwtrSJPdwQ",
				value: "Chuck Norris did it with Kim kardashion so hard that she secretly grew a dick"
			},
			{
				categories: [],
				created_at: "2020-01-05 13:42:18.823766",
				icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
				id: "1Kr6Jq-gTSi9NYjU9FJjcg",
				updated_at: "2020-01-05 13:42:18.823766",
				url: "https://api.chucknorris.io/jokes/1Kr6Jq-gTSi9NYjU9FJjcg",
				value: "Chuck Norris once trew his used condom in the toilet 9months later the ninja turtles was born"
			}
		]
	}

	beforeEach(() => {
		httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
		service       = new JokeService(httpClientSpy);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
	it('check getRandomJoke functionality', (done: DoneFn) => {
		httpClientSpy.get.and.returnValues(of(randomJoke));
		service.getRandomJoke().subscribe(
			(joke: Joke) => {
				const parseRandomJoke = Joke.parseToJoke(randomJoke)
				expect(joke).toEqual(parseRandomJoke);
				done();
			}
		);
		expect(httpClientSpy.get.calls.count())
		.toBe(1);
	});
	it('check getSearchListJokes functionality', (done: DoneFn) => {
		httpClientSpy.get.and.returnValues(of(searchJokes));
		service.getSearchListJokes('rew').subscribe(
			(jokes: Joke[]) => {
				const parseSearchJokes = searchJokes[ 'result' ].map(res => Joke.parseToJoke(res))
				expect(jokes).toEqual(parseSearchJokes);
				done()
			}
		);
		expect(httpClientSpy.get.calls.count())
		.toBe(1);
	});
});


