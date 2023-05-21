const data_pool = require('../../../../Mockaroo_tag.json');


describe('Crear un Tag nuevo', () => {
  let variables;

  before(() => {
    cy.readFile('variables.json').then((content) => {
      variables = content;
    });
  });

  const DataInfo = data_pool[Math.floor(Math.random() * data_pool.length)];
  const name =DataInfo.longString;
  const descripcion=DataInfo.description;
  const color=DataInfo.color;
  const slug=DataInfo.slug;

  it('Como usuario administrador inicio sesion en Ghost y creo un elemento Tag', () => {
    cy.viewport(1200, 1500);
    
    cy.visit(variables.UrlBase + '/#/signin')
    cy.get('#identification').type(variables.username)
    cy.get('#password').type(variables.password)
    cy.wait(2000);

    cy.get('[data-test-button="sign-in"]').click()
    cy.wait(2000);
    
    cy.get('[data-test-nav="tags"]').click()
    cy.wait(2000);
    
    cy.get('.ember-view.gh-btn.gh-btn-primary').click()
    cy.wait(2000);
    
    cy.get('#tag-name').type(`${name}`)
    cy.wait(2000);
    
    cy.get('input[placeholder="15171A"]').type(`${color}`)
    cy.wait(2000);
    
    cy.get('#tag-description').type(`${descripcion}`)
    cy.wait(2000);
    
    cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
    cy.wait(2000);

    cy.then(() => {
        cy.get('[data-test-link="tags-back"]').click();
      })
    cy.then(() => {
        const tagName = 'Tag Example Test';
        cy.get('h3.gh-tag-list-name').contains(tagName).should('be.visible');
      });
      cy.visit(variables.UrlBase + '/#/signin');
  
      cy.wait(2000);
  

  });
});