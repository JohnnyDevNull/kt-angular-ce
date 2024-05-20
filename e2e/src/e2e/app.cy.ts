import {
  getApiDataForm,
  getApiDataJson,
  getFieldA,
  getFieldB,
  getFieldC, getFieldE, getFieldI,
  getFieldJ, getFieldK, getFieldL,
  getGreeting
} from '../support/app.po';

describe('e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().should('contain.text', 'Angular Coding Exercise');
    getApiDataJson().should('be.visible').and('not.be.empty');
    getApiDataForm().should('be.visible');

    getFieldA().should('have.class', 'mat-mdc-checkbox-checked');
    getFieldJ().should('not.have.class', 'mat-mdc-checkbox-checked');

    getFieldB().should('have.value', 44);
    getFieldC().should('have.value', 'Hello, Klicktipp!');
    getFieldE().should('have.value', 'I am a nested object with strings!');
    getFieldI().should('have.value', 'So am I!');
    getFieldK().should('have.value', 123);
    getFieldL().should('have.value', 'And I am last!');
  });
});
