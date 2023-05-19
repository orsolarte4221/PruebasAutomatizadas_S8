// Importa la biblioteca faker
import {faker} from '@faker-js/faker'

describe('Gestión Post', () => {
  let properties;
  let variables;
  let numeroPantalla=0;
  const test_name = 'PostCreate';    

  let postData; 

  before(() => {
      cy.readFile('variables.json').then((content) => {
        variables = content;
      });
      cy.readFile('post_properties.json').then((content_post) => {
        properties = content_post;
      });  

      // Utiliza faker para generar una cadena de 255 palabras aleatorias
      postData = {
        titleonlimit_255: faker.random.alphaNumeric(255),
        body: "Body Correcto"
      };
  });

  it('Hacer Login, Crear un post, publicarlo y consultar la publicación', () => {

      cy.visit(variables.UrlBase);
      cy.wait(5000);
 
      cy.get('#identification').type(variables.username);
      cy.get('#password').type(variables.password);
      cy.get(properties.buttons['sign-in']).click();
 

      cy.get(properties.buttons['posts']).click();
 

      cy.get(properties.buttons['new-post']).click();
 

      cy.get(properties.elements['post-title-input']).type(postData.titleonlimit_255);
 
      cy.wait(3000);
      cy.get(properties.elements['post-title-input']).type('{enter}',{overwrite: true},{capture: 'runner'});


      cy.get(properties.buttons['publish']).click();
 

      cy.get(properties.buttons['continue']).click();
 

      cy.get(properties.buttons['confirm-publish']).click();
 

      cy.get(properties.elements['post-title']).contains(postData.titleonlimit_255).should('exist');
  });    
});
