const test_name = 'Tag_EditTag/after-'
const FileNum = 1

describe('Editar un Tag', () => {
  let variables;
  let contador= FileNum;
  
  before(() => {
    cy.readFile('variables.json').then((content) => {
      variables = content;
    });
  });
   
    it('Como usuario administrador inicio sesion en Ghost, busco el primer elemento de la lista Tag y lo edito', () => {
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

      cy.get('.gh-list-chevron').first().click();;
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(2000);
      contador++; 

      cy.get('#tag-name').clear().type('New Tag Example Test');
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(2000);
      contador++; 

      cy.get('input[placeholder="15171A"]').clear().type('1c0df8');
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(2000);
      contador++; 

      cy.get('#tag-slug').clear().type('New_Tag_Example_Test');
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(2000);
      contador++; 

      cy.get('#tag-description').clear().type('Esta es una descripcion nueva de prueba para validar la funcionalidad de editar Tags');
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(2000);
      contador++; 

      cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 

      cy.get('[data-test-link="tags-back"]').click();
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 

      cy.get('h3.gh-tag-list-name').contains('New Tag Example Test').should('be.visible');
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(2000);
      contador++; 

    });
  });