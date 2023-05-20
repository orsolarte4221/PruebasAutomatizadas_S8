//Importar el archivo JSON como variable
const data_pool = require('../../../../Mock_Data_Sebastian.json');
const variables =  require('../../../../variables.json');
const properties = require('../../../e2e/properties_sebastian.json')


// Obtener Variables aleatorias de Data Pool

const email = data_pool[Math.floor(Math.random() * data_pool.length)].email;
const pass = data_pool[Math.floor(Math.random() * data_pool.length)].password;

describe('Tratar de ingresar sesion con un email que no esta registrado', () => {
  it('Ingresa un email no registrado, una contraseña y da click en inciar sesion', () => {
      
      cy.visit(variables.UrlBase)
      cy.get('#identification').type(email)
      cy.get('#password').type(pass)    
      cy.get(properties.buttons.next).click()

      cy.get('.main-error')
      .contains('There is no user with that email address.')
      .should('be.visible');
    
      
  });
});
