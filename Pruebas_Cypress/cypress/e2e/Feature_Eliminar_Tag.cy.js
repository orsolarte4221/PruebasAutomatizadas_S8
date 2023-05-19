const test_name = 'Tag_DeleteTag/after-'
const FileNum = 1

describe('Eliminar un Tag', () => {
  let variables;
  let uncaughtExceptionHandler;
  let contador= FileNum;

  before(() => {
    cy.readFile('variables.json').then((content) => {
      variables = content;
    });
  });

  beforeEach(() => {
    uncaughtExceptionHandler = (err, runnable) => {
      return false;
    };
    Cypress.on('uncaught:exception', uncaughtExceptionHandler);
  });

  afterEach(() => {
    Cypress.off('uncaught:exception', uncaughtExceptionHandler);
  });

  it('Como usuario administrador inicio sesión en Ghost, busco el primer elemento de la lista Tag y lo elimino', () => {
    cy.viewport(1200, 1500);
    
    cy.visit(variables.UrlBase + '/#/signin');
    cy.get('#identification').type(variables.username);
    cy.get('#password').type(variables.password);
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 

    cy.get('[data-test-button="sign-in"]').click();
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(5000);
    contador++; 

    cy.get('[data-test-nav="tags"]').click();
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(5000);
    contador++; 

    cy.get('.ember-view.gh-btn.gh-btn-primary').click()
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(5000);
    contador++; 

    cy.get('#tag-name').type('00001')
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 

    cy.get('input[placeholder="15171A"]').type('f20707')
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 

    cy.get('#tag-description').type('Esta es una descripcion de prueba para validar la funcionalidad de crear Tags')
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 

    cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 

    cy.get('[data-test-link="tags-back"]').click();
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 

    cy.get('.gh-list-chevron').first().click();
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 

    cy.get('.gh-btn.gh-btn-red.gh-btn-icon').click();
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 

   });
});