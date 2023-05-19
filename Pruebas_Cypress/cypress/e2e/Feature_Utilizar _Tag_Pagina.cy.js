const test_name = 'Tag_AsigneTag/after-'
const FileNum = 1

describe('Utilizar un Tag en una Pagina', () => {

  let variables;
  let contador= FileNum;

  before(() => {
    cy.readFile('variables.json').then((content) => {
      variables = content;
    });
  });
  
    it('Como usuario administrador inicio sesion en Ghost, selecciono una pagina y le agrego un Tag', () => {
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
      
      cy.get('[data-test-nav="pages"]').click();
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 
      
      cy.get('.gh-post-list-cta.edit').first().click();
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 
      
      cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 
      
      cy.get('.ember-power-select-status-icon').first().click();
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 
      
      cy.get('[data-option-index="0"]').click();
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 
      
      cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 
      
      cy.get('[data-test-button="publish-save"]').click();
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 
      
    });
  });
  