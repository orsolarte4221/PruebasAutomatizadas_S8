// Importa la biblioteca faker
import {faker} from '@faker-js/faker'


describe('Gestión Post', () => {
  let properties;
  let variables;
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  let numeroPantalla=0;         
  const test_name = 'PostEdit';   
  let postTitle = '';  // Se añade la variable para guardar los datos de post_create.json
           

  before(() => {
      cy.readFile('variables.json').then((content) => {
        variables = content;
      });
      cy.readFile('post_properties.json').then((content_post) => {
        properties = content_post;
      });       

      // Utiliza faker para generar una cadena de 255 palabras aleatorias
      // Usa faker para generar un título de post aleatorio de mas de 255
      while (postTitle.length < 255) {
        postTitle += faker.lorem.sentence();
      }   

  });

  it('Hacer Login, Crear Post, Editar un post, Publicar Post y Validar publicación', () => {

      cy.visit(variables.UrlBase);
 
      cy.get('#identification').type(variables.username);
      cy.get('#password').type(variables.password);
      cy.get(properties.buttons['sign-in']).click();
  
      cy.wait(3000);
      cy.get(properties.buttons.posts).click();
  
      cy.wait(3000);
      cy.get(properties.buttons["new-post"]).click();
 
      cy.wait(3000);
      cy.get(properties.elements["post-title-input"]).type('Editable Post');
  
      cy.wait(3000);
      cy.get(properties.elements["post-title-input"]).type('{enter}');
  
      cy.wait(3000);
      cy.get(properties.buttons["back-to-posts-button"]).click();
  
      cy.wait(3000);
      cy.get(properties.elements["lista-post-title"]).first().contains('Editable Post').click({force: true} );
  
      cy.wait(3000);
      cy.get(properties.elements["post-title-input"]).clear().type(postTitle);
  
      cy.get(properties.elements["post-title-input"]).type('{enter}');
  
      cy.wait(3000);
      cy.get(properties.buttons["publish"]).click();
  
      cy.wait(3000);
      cy.get(properties.elements['alerta_roja']).should('contain', 'Validation failed: Title cannot be longer than 255 characters.');
  
    });
});
