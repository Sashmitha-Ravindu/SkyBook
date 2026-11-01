import { getBrand, getHeading, getSkipLink } from '../support/app.po';

describe('shell', () => {
  beforeEach(() => cy.visit('/'));

  it('redirects to the search page', () => {
    cy.location('pathname').should('eq', '/search');
    cy.title().should('eq', 'Search flights | SkyBook');
    getHeading().should('have.text', 'Search flights');
  });

  it('shows the brand in the header', () => {
    getBrand().should('contain.text', 'SkyBook');
  });

  it('skips to the main content from the keyboard', () => {
    getSkipLink().focus().should('be.visible').click();
    cy.focused().should('have.id', 'main-content');
  });
});
