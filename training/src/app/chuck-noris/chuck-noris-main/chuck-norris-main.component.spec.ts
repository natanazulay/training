import { ChuckNorrisMain } from './chuck-norris-main.component';
import { RoutingService } from "../services/routing.service";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/state";
import { generateJoke, getJokeList } from "../../store/generateJoke.actions";

describe('MainComponent', () => {
	let component: ChuckNorrisMain;
	let store: Store<AppState>;
	let route: ActivatedRoute;
	let routingService: RoutingService;

	beforeEach(async () => {
		store          = jasmine.createSpyObj('store', ['dispatch', 'select'])
		route          = jasmine.createSpyObj('route', ['snapshot'])
		routingService = jasmine.createSpyObj('routingService', ['navigate'])

		component = new ChuckNorrisMain(store, route, routingService);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('check generate joke list', () => {
		let key = 'hello';
		component.getJokesFromSearch(key);
		expect(store.dispatch).toHaveBeenCalledOnceWith(getJokeList({ payload: key }))
	})

	it('check generate joke', () => {
		component.onGenerateJokeClick()
		expect(store.dispatch).toHaveBeenCalledOnceWith(generateJoke())
	})

	it('check isSearchMode mode', () => {
		const state = 'search';
		component.navigate(state);
		expect(routingService.navigate).toHaveBeenCalledOnceWith(state);
	})
});
