//Importar el archivo JSON como variable
const data_pool = require('../../../../Mock_Data_Sebastian.json');
const variables =  require('../../../../variables.json');
const properties = require('../../properties_sebastian.json')


// Obtener Variables aleatorias de Data Pool

const pass = data_pool[Math.floor(Math.random() * data_pool.length)].password;

describe('Tratar de ingresar sesion con un email registrado y contraseña incorrecta', () => {
  it('Ingresa un email registrado y una contraseña incorrecta y da click en inciar sesion', () => {
      
      cy.visit(variables.UrlBase)
      cy.get('#identification').type('s.mascareno@uniandes.edu.co')
      cy.get('#password').type(pass)    
      cy.get(properties.buttons.next).click()

      cy.get('.main-error')
      .contains('Your password is incorrect.')
      .should('be.visible');
    
      
  });
});
