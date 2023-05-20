import {faker} from '@faker-js/faker'

//Importar el archivo JSON como variable
const data_pool = require('../../../../Mock_Data_Sebastian.json');
const variables =  require('../../../../variables.json');
const properties = require('../../properties_sebastian.json')


// Obtener Variables aleatorias de Data Pool

const title = data_pool[Math.floor(Math.random() * data_pool.length)].page_title;
const page_body = data_pool[Math.floor(Math.random() * data_pool.length)].page_body;

let excerpt = faker.lorem.paragraphs(5); // Genera un párrafo largo con saltos de línea

// Elimina los saltos de línea y los reemplaza por espacios en blanco
excerpt = excerpt.replace(/[\r\n]+/g, ' ');


//Mantener solo los primeros 255 caracteres
excerpt = excerpt.slice(0,300);


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
