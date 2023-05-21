import {faker} from '@faker-js/faker'
const name = faker.string.alphanumeric(50);
const descripcion = faker.string.alphanumeric(200);
const color = faker.string.numeric(6);
const slug = faker.string.symbol(10);

describe('Crear un Tag nuevo', () => {
  let variables;

  before(() => {
    cy.readFile('variables.json').then((content) => {
      variables = content;
    });
  });

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
  
    cy.get('#tag-slug').type(`${slug}`)
    cy.wait(2000);
         
    cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()    
    cy.wait(2000);
     

    cy.then(() => {
        cy.get('[data-test-link="tags-back"]').click();
      })
    cy.then(() => {
        cy.get('h3.gh-tag-list-name').contains(`${name}`).should('be.visible');
      });
      cy.visit(variables.UrlBase + '/#/signin');
      
      cy.wait(2000);
       

  });
});