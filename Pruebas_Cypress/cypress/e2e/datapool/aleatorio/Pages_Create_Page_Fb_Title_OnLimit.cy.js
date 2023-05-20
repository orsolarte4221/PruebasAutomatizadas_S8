import {faker} from '@faker-js/faker'


//Importar el archivo JSON como variable
const data_pool = require('../../../../Mock_Data_Sebastian.json');
const variables =  require('../../../../variables.json');
const properties = require('../../properties_sebastian.json')


let page_title = faker.lorem.sentence();
let page_body = faker.lorem.paragraphs(3);
let fb_title = faker.lorem.paragraphs(3);

fb_title = fb_title.replace(/[\r\n]+/g, ' ');

fb_title = fb_title.slice(0,301)




describe('Tratar de ingresar sesion con un email registrado y contraseña incorrecta', () => {
  it('Ingresa un email registrado y una contraseña incorrecta y da click en inciar sesion', () => {
      
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
      cy.get('button[aria-label="Close Facebook card panel"]').click()
      cy.get(properties.buttons['page settings']).click()
      
      
      
      
      cy.get(properties.buttons.publish).should('be.enabled')
    
    
      
  });
});
