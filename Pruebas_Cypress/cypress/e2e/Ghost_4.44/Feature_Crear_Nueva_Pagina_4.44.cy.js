//Importar el archivo JSON como variable
const properties = require('./properties_sebastian_4.44.json');
const variables =  require('../../../variables_4.44.json');
const test_name = 'Pages_NewPage_4.44'
let number =1;

describe('Crear una nueva página en la aplicación Ghost', () => {
  it('Iniciar sesión y crear una nueva página', () => {
      cy.visit(variables.UrlBase)

      cy.wait(2000)
      cy.screenshot(`${test_name}/before-${number}`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get('input[name="identification"]').type(variables.username)
      

      cy.wait(2000)
      cy.screenshot(`${test_name}/before-${number}`,{overwrite: true},{capture: 'runner'})
      number++;
      
      cy.get('input[name="password"]').type(variables.password)

      cy.wait(2000)
      cy.screenshot(`${test_name}/before-${number}`,{overwrite: true},{capture: 'runner'})
      number++;
      

      cy.get(properties.buttons.next).click()
      

      cy.wait(2000)
      cy.screenshot(`${test_name}/before-${number}`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get(properties.buttons.pages).click()
      

      cy.wait(2000)
      cy.screenshot(`${test_name}/before-${number}`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get(properties.buttons["New Page"]).first().click()

      cy.wait(2000)
      cy.screenshot(`${test_name}/before-${number}`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get('textarea[placeholder="Page title"]').type('New Page Test')
      
      cy.wait(2000)
      cy.screenshot(`${test_name}/before-${number}`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get('div[data-placeholder="Begin writing your page..."]').type('This is a test for a new page')
      
      cy.wait(2000)
      cy.screenshot(`${test_name}/before-${number}`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get(properties.buttons.publish).click()
      
      cy.wait(2000)
      cy.screenshot(`${test_name}/before-${number}`,{overwrite: true})
      number++;

      cy.get(properties.buttons["confirm publish"]).click()
      
      cy.wait(2000)
      cy.screenshot(`${test_name}/before-${number}`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get(properties.buttons["back to pages"]).click()
      
      cy.wait(2000)
      cy.screenshot(`${test_name}/before-${number}`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get('a.gh-post-list-title h3')
      .contains('New Page Test')
      .should('be.visible');
      cy.screenshot(`${test_name}/before-${number}`,{overwrite: true},{capture: 'runner'})
  });
});
