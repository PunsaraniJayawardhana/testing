
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// cypress/support/commands.ts

declare global {
  namespace Cypress {
   
  }
}

// Cypress.Commands.add('login', (username = inputs.correct_email, password = inputs.correct_password) => {
//   cy.intercept('POST', '**/cognito-idp.us-east-1.amazonaws.com/**').as('loginRequest');
//   cy.visit('/login');
//   cy.get('[data-testid="Email Address"]').type(username);
//   cy.get('[data-testid="password"]').type(password);
//   cy.get('button[type="submit"]').click();
//   cy.wait('@loginRequest');
// });

// export {};

export {};