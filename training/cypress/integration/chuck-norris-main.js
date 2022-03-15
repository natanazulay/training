import {randomJokeResponse} from "../fixtures/random-joke";
import {searchJokesResponse} from "../fixtures/search-jokes";

describe('Main Test', () => {
	beforeEach(() => {
		commonMocks()
	})

	describe('Check Random Functionality', () => {
		it('Get Random Joke', () => {
			cy.visit('http://localhost:4200/random');
			cy.get('.random-container > .mat-focus-indicator').click();
			cy.wait('@getRandomJoke');
			cy.get('.joke-value').contains(randomJokeResponse.value);
		})
	})

	describe('Check Search Functionality', () => {
		it('Check Search Route On click', () => {
			cy.get('#mat-button-toggle-2-button > .mat-button-toggle-label-content').click();
			cy.location().should((loc) => {
				expect(loc.pathname).to.eq('/search');
			});
		})
		it('Check Go Button Is disable When Search Key Is Too Short', () => {
			cy.get('#searchKeyId').type('r');
			cy.get('.search-style > .mat-focus-indicator').should('be.disabled')
		})
		it('Check Search By Key', () => {
			cy.get('#searchKeyId').clear();
			cy.get('#searchKeyId').type('rew');
			cy.get('.search-style > .mat-focus-indicator').click();
			cy.wait('@getSearchJokes');
		})
		it('Check Open Joke On Table', () => {
			cy.get('tbody > :nth-child(1) > .cdk-column-id').click();
			cy.wrap(searchJokesResponse.result[0]).its('value').as('firstJokeValue');
			cy.get('.joke-value').invoke('text').then((elementText) => {
				cy.get('@firstJokeValue').should((responseText) => {
					expect(elementText).to.contains(responseText);
				})
			})
			cy.get('tbody > :nth-child(1) > .cdk-column-id').click();
		})
	})
})

function commonMocks() {
	cy.intercept('https://api.chucknorris.io/jokes/random', randomJokeResponse).as('getRandomJoke')
	cy.intercept('https://api.chucknorris.io/jokes/search?query=*', searchJokesResponse).as('getSearchJokes')
}
