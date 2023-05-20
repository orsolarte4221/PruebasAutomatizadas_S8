import {faker} from '@faker-js/faker'

//Importar el archivo JSON como variable
const data_pool = require('../../../../Mock_Data_Sebastian.json');
const variables =  require('../../../../variables.json');
const properties = require('../../properties_sebastian.json')


// Obtener Variables aleatorias de Faker

const name = faker.name.firstName();
const email = faker.internet.email();
// Generar un título de más de 255 caracteres
let longNote = faker.lorem.paragraphs(5); // Genera un párrafo largo con saltos de línea

// Elimina los saltos de línea y los reemplaza por espacios en blanco
longNote = longNote.replace(/[\r\n]+/g, ' ');


//Mantener solo los primeros 255 caracteres
longNote = longNote.slice(0,500);


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
      cy.get(properties.inputs.note).type(longNote)
      cy.get(properties.buttons['save member']).click()
      cy.get(properties.buttons.members).click()
      
      cy.get('h3.gh-members-list-name').should('contain', name)
      .should('be.visible');
    
      
  });
});
