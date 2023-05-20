//Importar el archivo JSON como variable
const data_pool = require('../../../../Mock_Data_Sebastian.json');
const variables =  require('../../../../variables.json');
const properties = require('../../properties_sebastian.json')


// Obtener Variables aleatorias de Data Pool

const title = data_pool[Math.floor(Math.random() * data_pool.length)].naughty_string;
const page_body = data_pool[Math.floor(Math.random() * data_pool.length)].naughty_string;
const excerpt = data_pool[Math.floor(Math.random() * data_pool.length)].naughty_string;

describe('Crea una página con su titulo y cuerpo y se espera que se cree satisfactoriamente', () => {
  it('Crea una nueva página', () => {
      
      cy.visit(variables.UrlBase)
      cy.get('#identification').type(variables.username)
      cy.get('#password').type(variables.password)    
      cy.get(properties.buttons.next).click()

      cy.get(properties.buttons.pages).click()
      cy.get(properties.buttons["New Page"]).click()

      cy.get('textarea[placeholder="Page title"]').type(title)
      cy.get('div[data-placeholder="Begin writing your page..."]').type(page_body)
      cy.get(properties.buttons['page settings']).click()
      cy.get('textarea[name="post-setting-custom-excerpt"]').type(excerpt)
      cy.get(properties.buttons['page settings']).click()
      cy.get(properties.buttons.publish).click()
      cy.get(properties.buttons["continue to final review"]).click()
      cy.get(properties.buttons["confirm publish"]).click()

      cy.get('div[data-test-publish-flow="complete"]')
      .contains('Boom. It’s out there.')
      .should('be.visible');
    
      
  });
});
