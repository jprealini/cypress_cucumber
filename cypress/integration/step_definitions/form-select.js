import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://www.techlistic.com/';

Given('I open the sample page', () => {
  cy.visit(url)
})

Then(`the title should be {string}`, (title) => {
  cy.title().should('include', title)
})