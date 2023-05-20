import {faker} from '@faker-js/faker'


//Importar el archivo JSON como variable
const data_pool = require('../../../../Mock_Data_Sebastian.json');
const variables =  require('../../../../variables.json');
const properties = require('../../properties_sebastian.json')


let page_title = faker.lorem.sentence();
let page_body = faker.lorem.paragraphs(3);
let fb_title = faker.lorem.words(3);
let fb_desc = faker.lorem.paragraphs(5);


fb_desc = fb_desc.replace(/[\r\n]+/g, ' ');

fb_desc = fb_desc.slice(0,501)




describe('Añade una descripción a los metadatos de FB por encima del limite', () => {
  it('Añade una descripción a los metadatos de FB por encima del limite', () => {
      
      cy.visit(variables.UrlBase)
      cy.get('#identification').type(variables.username)
      cy.get('#password').type(variables.password)    
      cy.get(properties.buttons.next).click()

      cy.get(properties.buttons.pages).click()
      cy.get(properties.buttons["New Page"]).click()
      cy.get('textarea[placeholder="Page title"]').type(page_title)
      cy.get('div[data-placeholder="Begin writing your page..."]').type(page_body)
      cy.get(properties.buttons['page settings']).click()
      cy.get('button[data-test-button="facebook-data"]').click()
      cy.get('input[name="post-setting-og-title"]').type(fb_title)
      cy.get('textarea[name="post-setting-og-description"]').type(fb_desc)
      cy.get('input[name="post-setting-og-title"]').click()
      
      
      
      cy.get('.response').should('contain', 'Facebook Description cannot be longer than 500 characters.')
    
    
      
  });
});
