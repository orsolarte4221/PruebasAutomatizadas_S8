const data_pool = require('../../../../Mockaroo_tag.json');


describe('Crear un Tag nuevo', () => {
  let variables;

  before(() => {
    cy.readFile('variables.json').then((content) => {
      variables = content;
    });
  });

  const DataInfo = data_pool[Math.floor(Math.random() * data_pool.length)];
  const name =DataInfo.special;
  const descripcion=DataInfo.description;
  const color=DataInfo.color;
  const slug=DataInfo.slug;
   
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

      cy.get('#tag-name').clear().type(`${name}`);
      cy.wait(2000);

      cy.get('input[placeholder="15171A"]').clear().type(`${color}`);
      cy.wait(2000);

      cy.get('#tag-slug').clear().type(`${slug}`);
      cy.wait(2000);

      cy.get('#tag-description').clear().type(`${descripcion}`);
      cy.wait(2000);

      cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
      cy.wait(5000);

      cy.get('[data-test-link="tags-back"]').click();
      cy.wait(5000);

      cy.get('h3.gh-tag-list-name').contains('New Tag Example Test').should('be.visible');
      cy.wait(2000);


    });
  });