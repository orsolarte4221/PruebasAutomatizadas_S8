import {faker} from '@faker-js/faker'


//Importar el archivo JSON como variable
const data_pool = require('../../../../Mock_Data_Sebastian.json');
const variables =  require('../../../../variables.json');
const properties = require('../../properties_sebastian.json')


let page_title = faker.lorem.sentence();
let page_body = faker.lorem.paragraphs(3);
let twitter_title = faker.lorem.words(3);
let twitter_desc = faker.lorem.paragraphs(5);

twitter_desc = twitter_desc.replace(/[\r\n]+/g, ' ');

twitter_desc = twitter_desc.slice(0,500)




describe('Añade una descripción a los metadatos de Twitter en el límite de caracteres', () => {
  it('Añade una descripción a los metadatos de Twitter en el límite de caracteres', () => {
      
      cy.visit(variables.UrlBase)
      cy.get('#identification').type(variables.username)
      cy.get('#password').type(variables.password)    
      cy.get(properties.buttons.next).click()

      cy.get(properties.buttons.pages).click()
      cy.get(properties.buttons["New Page"]).click()
      cy.get('textarea[placeholder="Page title"]').type(page_title)
      cy.get('div[data-placeholder="Begin writing your page..."]').type(page_body)
      cy.get(properties.buttons['page settings']).click()
      cy.get('button[data-test-button="twitter-data"]').click()
      cy.get('input[name="post-setting-twitter-title"]').type(twitter_title)
      cy.get('textarea[name="post-setting-twitter-description"]').type(twitter_desc)
      cy.get('input[name="post-setting-twitter-title"]').click()
      cy.get('button[aria-label="Close Twitter card panel"]').click()
      cy.get(properties.buttons['page settings']).click()
      
    
      cy.get(properties.buttons.publish).should('be.enabled')
      
      
      
    
      
  });
});
