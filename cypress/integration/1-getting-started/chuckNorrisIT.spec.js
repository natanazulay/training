import {mockJoke} from "../../fixtures/mock-joke";

describe(' test', () => {
	beforeEach(() => {
		cy.visit('http://localhost:4200');
		cy.intercept('https://api.chucknorris.io/jokes/random', mockJoke).as('generateRandomJoke')
	})

	it('check Search routing and its functionality', () => {
		cy.visit('http://localhost:4200/search');
		cy.get('#search-box').type('hello')
		cy.get('#go-button').click();
		cy.get('.mat-table').should('be.visible');
		cy.get('.element-row').each(($joke) => {
			cy.wrap($joke).click().then((el) =>
				cy.wrap(el).should('have.class', 'example-expanded-row')
			)
		})
	})

	it('generate random joke', () => {
		cy.get('#go-button').click();
		cy.wait('@generateRandomJoke');
		cy.get('#joke-text').should('contain', mockJoke.value);
	})
})

describe('Routing check on click', () => {
	beforeEach(() => {
		cy.visit('http://localhost:4200');
	})
	it('check search routing', () => {
		cy.get('.search-button').click();
		cy.location().should(route => {
			expect(route.pathname).to.be.equal('/search');
		});
	});

	it('check random routing', () => {
		cy.get('.random-button').click();
		cy.location().should(route => {
			expect(route.pathname).to.be.equal('/random');
		});
	});

	it('check vip routing', () => {
		cy.get('.vip-button').invoke('removeAttr', 'target').click()
		cy.url().should('include', 'vip')
	});
});
