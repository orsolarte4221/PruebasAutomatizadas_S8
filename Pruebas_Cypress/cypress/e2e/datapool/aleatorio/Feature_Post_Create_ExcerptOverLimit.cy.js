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
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraph(),
        excerpt_over_300: faker.random.alphaNumeric(301),  
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
 

      cy.get(properties.elements['post-title-input']).type(postData.title);
      cy.wait(3000);
      cy.get(properties.elements['post-title-input']).type('{enter}',{overwrite: true},{capture: 'runner'});

      cy.get(".koenig-editor__editor").type(postData.body,{ parseSpecialCharSequences: false });

      cy.wait(3000);
      cy.get(properties.buttons["settings-menu-toggle"]).click();
      cy.get('textarea[name="post-setting-custom-excerpt"]').type(postData.excerpt_over_300);
  

      cy.get(properties.buttons['publish']).click({force: true} );

      cy.get(properties.elements['alerta_roja']).should('contain', 'Validation failed: Excerpt cannot be longer than 300 characters.');
 

  });    
});
