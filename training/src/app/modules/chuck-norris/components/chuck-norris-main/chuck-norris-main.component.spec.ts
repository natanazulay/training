import { ChuckNorrisMainComponent } from './chuck-norris-main.component';
import { ActivatedRoute } from "@angular/router";
import { RoutingService } from "../../services/routes/routing.service";
import { getRandomJokeSelector, getSearchListJokesSelector } from "../../../../store/selectors/app.selectors";
import { of } from "rxjs";
import { AppActions } from "../../../../store/actions/app.actions";

describe('ChuckNorrisMainComponent', () => {
	let component: ChuckNorrisMainComponent;
	let routingService: RoutingService;
	let route: ActivatedRoute;
	let store: any;
	const randomJoke  = {
		categories: [],
		created_at: "2020-01-05 13:42:28.664997",
		icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
		id: "pWFcPdIQQNCq8pMINvOgHQ",
		updated_at: "2020-01-05 13:42:28.664997",
		url: "https://api.chucknorris.io/jokes/pWFcPdIQQNCq8pMINvOgHQ",
		value: "Chuck Norris had a razor named after him, made by Gillette for women. He is the best a woman can get."
	}
	const searchJokes = [
		{
			"categories": [],
			"created_at": "2020-01-05 13:42:18.823766",
			"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
			"id": "1Kr6Jq-gTSi9NYjU9FJjcg",
			"updated_at": "2020-01-05 13:42:18.823766",
			"url": "https://api.chucknorris.io/jokes/1Kr6Jq-gTSi9NYjU9FJjcg",
			"value": "Chuck Norris once trew his used condom in the toilet 9months later the ninja turtles was born"
		},
		{
			"categories": [],
			"created_at": "2020-01-05 13:42:18.823766",
			"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
			"id": "RF3_YjYlS_SufzREhV1NUQ",
			"updated_at": "2020-01-05 13:42:18.823766",
			"url": "https://api.chucknorris.io/jokes/RF3_YjYlS_SufzREhV1NUQ",
			"value": "Chuck Norris loves all that shit Andrew Zimmern eats on bizzare foods."
		}
	]

	beforeEach(async () => {

		routingService = jasmine.createSpyObj('routingService', ['navigate']);
		route          = jasmine.createSpyObj('route', ['snapshot']);
		store          = jasmine.createSpyObj('store', ['dispatch', 'select']);

		store.select.and.callFake((selector: any) => {
			switch (selector) {
				case getRandomJokeSelector:
					return of(randomJoke);
				case getSearchListJokesSelector:
					return of(searchJokes);
				default:
					return of({});
			}
		});

		component = new ChuckNorrisMainComponent(routingService, route, store);

	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('check toggleJokeMode functionality - should navigate to url', () => {
		const url = 'random'
		component.toggleJokeMode(url);
		expect(routingService.navigate).toHaveBeenCalledTimes(1)
		expect(routingService.navigate).toHaveBeenCalledWith(url)
	});

	it('check generateRandomJoke functionality', () => {
		component.generateRandomJoke();
		expect(store.dispatch).toHaveBeenCalledWith(AppActions.GET_RANDOM_JOKE());
	});

	it('check generateSearchJoke functionality', () => {
		const searchKey = 'rew'
		component.generateSearchJoke(searchKey);
		expect(store.dispatch).toHaveBeenCalledWith(AppActions.GET_SEARCH_JOKES({ payload: searchKey }));
	});
});
