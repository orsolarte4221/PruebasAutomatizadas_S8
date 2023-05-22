describe('Modificar Perfil de Usuario', () => {
    let variables;
    
    before(() => {
      cy.readFile('variables.json').then((content) => {
        variables = content;
      });
    });
     
      it('Como usuario administrador inicio sesion en Ghost, ingreso a mi perfil y lo edito', () => {
        cy.visit(variables.UrlBase + '/#/signin');
        cy.wait(2000);
        cy.get('#identification').type(variables.username);
        cy.wait(2000);
        cy.get('#password').type(variables.password);
        cy.wait(2000);
        cy.get('[data-test-button="sign-in"]').click();
        cy.wait(2000);
        cy.get('[class="gh-user-avatar relative"]').click();
        cy.wait(2000);
        cy.get('[data-test-nav="user-profile"]').click();
        cy.wait(2000);
        cy.get('#user-name').clear().type('Test');
        cy.wait(2000);
        cy.get('#user-slug').clear().type('Test');
        cy.wait(2000);
        cy.get('#user-location').clear().type('Test');
        cy.wait(2000);
        cy.get('#user-bio').clear().type('Test');
        cy.wait(2000);
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.wait(2000);
        });
    });
    