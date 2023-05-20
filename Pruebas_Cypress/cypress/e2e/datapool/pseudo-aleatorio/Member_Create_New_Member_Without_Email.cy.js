//Importar el archivo JSON como variable
const data_pool = require('../../../../Mock_Data_Sebastian.json');
const variables =  require('../../../../variables.json');
const properties = require('../../properties_sebastian.json')


// Obtener Variables aleatorias de Data Pool

const member = data_pool[Math.floor(Math.random() * data_pool.length)];

describe('Generar un nuevo miembro correctamente', () => {
  it('Generar y guardar un nuevo miembro correctamente', () => {
      
      cy.visit(variables.UrlBase)
      cy.get('#identification').type(variables.username)
      cy.get('#password').type(variables.password)    
      cy.get(properties.buttons.next).click()

      cy.get(properties.buttons.members).click()
      cy.wait(1000)
      cy.get(properties.buttons['new member']).click()
      cy.get(properties.inputs.name).type(member.name)
      
      cy.get(properties.inputs.note).type(member.notes)
      cy.get(properties.buttons['save member']).click()
      


      cy.get('.response').should('contain', "Please enter an email.")
      .should('be.visible');
    
      
  });
});
