describe('Editar un Tag', () => {
  let variables;
  let fieldsInfo;
  
  before(() => {
    cy.readFile('variables.json').then((content) => {
      variables = content;
    });

    cy.readFile('cypress/e2e/datapool/apriori/tag_fields.json').then((ContenFiels) => {
      fieldsInfo = ContenFiels.ColorOnLimit

    });   
  });
   
    it('Como usuario administrador inicio sesion en Ghost, busco el primer elemento de la lista Tag y lo edito', () => {
      cy.viewport(1200, 1500);
      
      cy.visit(variables.UrlBase + '/#/signin');
      cy.get('#identification').type(variables.username);
      cy.get('#password').type(variables.password);
      cy.wait(2000);

      cy.get('[data-test-button="sign-in"]').click();
      cy.wait(5000);

      cy.get('[data-test-nav="tags"]').click();
      cy.wait(5000);

      cy.get('.gh-list-chevron').first().click();;
      cy.wait(2000);

      cy.get('#tag-name').clear().type(fieldsInfo.name);
      cy.wait(2000);

      cy.get('input[placeholder="15171A"]').clear().type(fieldsInfo.color);
      cy.wait(2000);

      cy.get('#tag-slug').clear().type(fieldsInfo.slug);
      cy.wait(2000);

      cy.get('#tag-description').clear().type(fieldsInfo.description);
      cy.wait(2000);

      cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
      cy.wait(5000);

      cy.get('[data-test-link="tags-back"]').click();
      cy.wait(5000);

      cy.get('h3.gh-tag-list-name').contains('New Tag Example Test').should('be.visible');
      cy.wait(2000);


    });
  });