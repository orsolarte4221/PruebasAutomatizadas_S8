//Importar el archivo JSON como variable
//Tenga en cuenta que al ejecutar esta prueba no deben haber paginas en estado DRAF en el listado//

const properties = require('./properties_sebastian.json');
const variables =  require('../../variables.json');
const test_name = 'Pages_DeletePage'
let number = 1;

describe('Eliminar una página de la aplicación Ghost', () => {
  it('Iniciar sesión, crear una página nueva y luego eliminarla', () => {
    cy.visit(variables.UrlBase)

      cy.wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++;

      cy.get('#identification').type(variables.username)
      
      .wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++;
      
      cy.get('#password').type(variables.password)
    
      .wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++;
      
      cy.get(properties.buttons.next).click()
      
      .wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++;

      cy.get(properties.buttons.pages).click()

      .wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++; 

      cy.get(properties.buttons["New Page"]).click()
      
      .wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++;
      
      cy.get('textarea[placeholder="Page title"]').type('Delete Page Test')
      
      .wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++;
      
      cy.get('div[data-placeholder="Begin writing your page..."]').type('Este test inicia sesión, crea una página nueva y luego elimina la página creada.')
      
      .wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++;
      
      cy.get(properties.buttons.publish).click()
      
      .wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++;
      
      cy.get(properties.buttons["continue to final review"]).click()
      
      .wait(2000)
      
      cy.get(properties.buttons["confirm publish"]).click()
      
      .wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++;
      
      cy.get(properties.buttons["back to editor"]).click()
      
      .wait(2000)
      
      cy.get(properties.buttons["back to pages"]).click()

      .wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++;
      
      cy.get(properties.buttons["edit page"]).first().click()
      
      .wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++;
      
      cy.get(properties.buttons["page settings"]).click()
      
      .wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++;
      
      cy.get(properties.buttons["delete page"]).click()
      
      .wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++;
     
      cy.get(properties.buttons["confirm delete"]).click()
      
      .wait(2000)
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
      number++;
      
      cy.get('h3.gh-content-entry-title').should('not.contain', 'Delete Page Test')
      cy.screenshot(`${test_name}/after-${number}`,{overwrite: true})
  });
});