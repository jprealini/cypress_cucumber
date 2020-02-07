import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../page_objects/HomePage';

const url = 'https://www.techlistic.com/';
const home = new HomePage();

Given('I open the sample page', () => {
  home.visit(url)
})

Then(`the title should be {string}`, (title) => {
  cy.title().should('include', title)
})