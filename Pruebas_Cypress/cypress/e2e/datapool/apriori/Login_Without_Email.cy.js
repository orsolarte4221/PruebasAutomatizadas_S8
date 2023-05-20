//Importar el archivo JSON como variable
const data_pool = require('../../../../Mock_Data_Sebastian.json');
const variables =  require('../../../../variables.json');
const properties = require('../../properties_sebastian.json')


// Obtener Variables aleatorias de Data Pool

const pass = data_pool[Math.floor(Math.random() * data_pool.length)].password;

describe('Tratar de ingresar sesion sin ingresar email y solo la contraseña', () => {
  it('Ingresa solamente una contraseña y da click en inciar sesion', () => {
      
      cy.visit(variables.UrlBase)
      cy.get('#password').type(pass)    
      cy.get(properties.buttons.next).click()

      cy.get('.main-error')
      .contains('Please fill out the form to sign in.')
      .should('be.visible');
    
      
  });
});
