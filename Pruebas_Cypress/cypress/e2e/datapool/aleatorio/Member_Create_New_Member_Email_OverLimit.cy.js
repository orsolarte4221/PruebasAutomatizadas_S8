import {faker} from '@faker-js/faker'

//Importar el archivo JSON como variable
const data_pool = require('../../../../Mock_Data_Sebastian.json');
const variables =  require('../../../../variables.json');
const properties = require('../../properties_sebastian.json')


// Obtener Variables aleatorias de Faker

const name = faker.name.firstName();
const notes = faker.lorem.sentence();
// Generar un título de más de 255 caracteres
let longEmail = faker.lorem.paragraphs(3); // Genera un párrafo largo con saltos de línea

// Elimina los saltos de línea y los reemplaza por espacios en blanco
longEmail = longEmail.replace(/[\r\n]+/g, ' ');

//Mantener solo los primeros 255 caracteres
longEmail = longEmail.slice(0,255);

//Agregar Dominio
longEmail = longEmail + "@hotmail.com"

describe('tratar de generar un nuevo miembro con el campo email excediendo el límite de caracteres', () => {
  it('tratar de generar un nuevo miembro con el campo email excediendo el límite de caracteres', () => {
      
      cy.visit(variables.UrlBase)
      cy.get('#identification').type(variables.username)
      cy.get('#password').type(variables.password)    
      cy.get(properties.buttons.next).click()

      cy.get(properties.buttons.members).click()
      cy.wait(1000)
      cy.get(properties.buttons['new member']).click()
      cy.wait(1000)
      cy.get(properties.inputs.name).type(name)
      cy.get(properties.inputs.email).type(longEmail)
      cy.get(properties.inputs.note).type(notes)
      cy.get(properties.buttons['save member']).click()
      
      cy.get('.response').should('contain', "Email cannot be longer than 191 characters.")
      .should('be.visible');
    
      
  });
});
