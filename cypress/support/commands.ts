import inputs from '../../auth_test/data/input';
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
    interface Chainable {
      login(username?: string, password?: string): Chainable<void>;
    }
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

Cypress.Commands.add('login', (username = inputs.correct_email, password = inputs.correct_password) => {
  cy.visit('/login');

  cy.get('[data-testid="Email Address"]').type(username);
  cy.get('[data-testid="password"]').type(password);
  cy.get('button[type="submit"]').click();

  // Wait until accessToken is stored in localStorage
  cy.window().then((win) => {
    cy.log('Waiting for Cognito tokens...');
    return new Cypress.Promise((resolve, reject) => {
      const checkToken = () => {
        const keys = Object.keys(win.localStorage);
        const tokenKey = keys.find(
          (key) => key.includes('CognitoIdentityServiceProvider') && key.endsWith('accessToken')
        );
        const token = tokenKey ? win.localStorage.getItem(tokenKey) : null;

        if (token) {
          cy.log('Cognito login complete');
          resolve(token);
        } else {
          setTimeout(checkToken, 500); // Retry after 500ms
        }
      };
      checkToken();
    });
  });

  cy.window().then((win) => {
  const accessTokenKey = Object.keys(win.localStorage).find((k) =>
    k.includes('CognitoIdentityServiceProvider') && k.endsWith('accessToken')
  );
  expect(win.localStorage.getItem(accessTokenKey)).to.exist;
});

});
export {};