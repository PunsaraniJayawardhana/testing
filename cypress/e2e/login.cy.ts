import strings from "../../auth_test/constants/constant";
import inputs from "../../auth_test/data/input";

describe('Login Page Test', () => { 
  beforeEach(() => {
   cy.visit('/login');
   cy.wait(1000);
  });


  it('Checks texts', () => {
    cy.get('h2').should('be.visible');
    
  });
  
});
