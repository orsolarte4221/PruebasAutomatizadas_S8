import {faker} from '@faker-js/faker'


//Importar el archivo JSON como variable
const data_pool = require('../../../../Mock_Data_Sebastian.json');
const variables =  require('../../../../variables.json');
const properties = require('../../properties_sebastian.json')


let page_title = faker.lorem.sentence();
let page_body = faker.lorem.paragraphs(3);
let metadata_title = faker.lorem.sentence();
let metadata_description = faker.lorem.paragraphs(3);

metadata_description = metadata_description.replace(/[\r\n]+/g, ' ');

metadata_description = metadata_description.slice(0,145)




describe('Añade una descripción a los metadatos con el limite de caracteres', () => {
  it('Añade una descripción a los metadatos con el limite de caracteres', () => {
      
      cy.visit(variables.UrlBase)
      cy.get('#identification').type(variables.username)
      cy.get('#password').type(variables.password)    
      cy.get(properties.buttons.next).click()

      cy.get(properties.buttons.pages).click()
      cy.get(properties.buttons["New Page"]).click()
      cy.get('textarea[placeholder="Page title"]').type(page_title)
      cy.get('div[data-placeholder="Begin writing your page..."]').type(page_body)
      cy.get(properties.buttons['page settings']).click()
      cy.get('button[data-test-button="meta-data"]').click()
      cy.get('input[name="post-setting-meta-title"]').type(metadata_title)
      cy.get('textarea[name="post-setting-meta-description"]').type(metadata_description)
      cy.get('button[aria-label="Close meta data panel"]').click()
      cy.get(properties.buttons['page settings']).click()
      
      
      
      cy.get(properties.buttons.publish).should('be.enabled')
    
    
      
  });
});
