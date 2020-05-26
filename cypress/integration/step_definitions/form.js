import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open the sample page', () => {
  cy.visit('/')
})

Then(`the title should be {string}`, (title) => {
  cy.title().should('include', title)
})