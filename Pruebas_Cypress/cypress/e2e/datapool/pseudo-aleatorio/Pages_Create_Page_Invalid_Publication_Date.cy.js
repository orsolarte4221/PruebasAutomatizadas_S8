//Importar el archivo JSON como variable
const data_pool = require('../../../../Mock_Data_Sebastian.json');
const variables =  require('../../../../variables.json');
const properties = require('../../properties_sebastian.json')


// Obtener Variables aleatorias de Data Pool

const user = data_pool[Math.floor(Math.random() * data_pool.length)];


describe('Crea una página con su titulo y cuerpo y se espera que se cree satisfactoriamente', () => {
  it('Crea una nueva página', () => {
      
      cy.visit(variables.UrlBase)
      cy.get('#identification').type(variables.username)
      cy.get('#password').type(variables.password)    
      cy.get(properties.buttons.next).click()

      cy.get(properties.buttons.pages).click()
      cy.get(properties.buttons["New Page"]).click()

      cy.get('textarea[placeholder="Page title"]').type(user.page_title)
      cy.get('div[data-placeholder="Begin writing your page..."]').type(user.page_body)
      cy.get(properties.buttons['page settings']).click()
      cy.get('input[placeholder="YYYY-MM-DD"]').type(user.naughty_string)
      cy.get('input[name="post-setting-slug"]').click();

      cy.get('.gh-date-time-picker-error')
      .contains('Invalid date format, must be YYYY-MM-DD')
      .should('be.visible');
    
    
      
  });
});
