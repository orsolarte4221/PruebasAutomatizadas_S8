//Importar el archivo JSON como variable
const properties = require('./properties_sebastian.json');
const variables =  require('../../variables.json');
const test_name = 'Member_NewMember'

describe('Crear un nuevo miembro para ghost', () => {
  it('Iniciar sesión y crear una nueva miembro', () => {
    cy.visit(variables.UrlBase)
      cy.screenshot(`${test_name}/1`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/2`,{overwrite: true})

      .get('#identification').type(variables.username)
      cy.screenshot(`${test_name}/3`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/4`,{overwrite: true})

      .get('#password').type(variables.password)
      cy.screenshot(`${test_name}/5`,{overwrite: true})

      .get(properties.buttons.next).click()
      cy.screenshot(`${test_name}/6`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/7`,{overwrite: true})

      .get(properties.buttons.members).click()
      cy.screenshot(`${test_name}/8`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/9`,{overwrite: true})

      .get(properties.buttons['new member']).click()
      cy.screenshot(`${test_name}/10`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/11`,{overwrite: true})

      .get(properties.inputs.name).type('Sebastian')
      cy.screenshot(`${test_name}/12`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/13`,{overwrite: true})

      .get(properties.inputs.email).type('Sebastian@gmail.com')
      cy.screenshot(`${test_name}/14`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/15`,{overwrite: true})

      .get(properties.inputs.note).type('Esta es una nota para el nuevo miembro sebastian')
      cy.screenshot(`${test_name}/16`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/17`,{overwrite: true})

      .get(properties.buttons['save member']).click()
      cy.screenshot(`${test_name}/18`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/19`,{overwrite: true})

      .get(properties.buttons.members).click()
      cy.screenshot(`${test_name}/20`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/21`,{overwrite: true})

      .get('h3.gh-members-list-name').should('contain', 'Sebastian')
      .should('be.visible');
      cy.screenshot(`${test_name}/22`,{overwrite: true})
  });
});
