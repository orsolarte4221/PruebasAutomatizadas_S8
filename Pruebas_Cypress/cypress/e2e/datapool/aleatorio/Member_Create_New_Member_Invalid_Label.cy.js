import {faker} from '@faker-js/faker'

//Importar el archivo JSON como variable
const data_pool = require('../../../../Mock_Data_Sebastian.json');
const variables =  require('../../../../variables.json');
const properties = require('../../properties_sebastian.json')


// Obtener Variables aleatorias de Faker

const name = faker.name.firstName();
const email = faker.internet.email();
const note = faker.lorem.sentence();
const label = faker.lorem.word();


describe('Crear un nuevo miembro con el campo nombre en el límite de caracteres', () => {
  it('Crear un nuevo miembro con el campo nombre en el límite de caracteres', () => {
      
      cy.visit(variables.UrlBase)
      cy.get('#identification').type(variables.username)
      cy.get('#password').type(variables.password)    
      cy.get(properties.buttons.next).click()

      cy.get(properties.buttons.members).click()
      cy.wait(2000)
      cy.get(properties.buttons['new member']).click()
      cy.get(properties.inputs.name).type(name)
      cy.get(properties.inputs.email).type(email)
      cy.get(properties.inputs.note).type(note)
      cy.get('.ember-power-select-trigger-multiple-input').type(label)
      cy.get('li.ember-power-select-option').click()
      cy.get(properties.buttons['save member']).click()
      
      
      cy.get('.response').should('contain', "Note is too long.")
      .should('be.visible');
    
      
  });
});
