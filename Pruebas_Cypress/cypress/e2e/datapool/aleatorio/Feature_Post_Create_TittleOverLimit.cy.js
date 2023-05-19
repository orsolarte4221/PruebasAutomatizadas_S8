import {faker} from '@faker-js/faker'


describe('Gestión Post', () => {
  let properties;
  let variables;
  let numeroPantalla = 0;
  const test_name = 'PostCreate';    

  before(() => {
    cy.readFile('variables.json').then((content) => {
      variables = content;
    });
    cy.readFile('post_properties.json').then((content_post) => {
      properties = content_post;
    });  
  });

  it('Hacer Login, Crear un post, publicarlo y consultar la publicación', () => {

    cy.visit(variables.UrlBase);
    cy.wait(5000);
 
    cy.get('#identification').type(variables.username);
    cy.get('#password').type(variables.password);
    cy.get(properties.buttons['sign-in']).click();

    cy.get(properties.buttons['posts']).click();

    cy.get(properties.buttons['new-post']).click();

    // Usa faker para generar un título de post aleatorio de mas de 255
    let postTitle = '';
    while (postTitle.length < 255) {
      postTitle += faker.lorem.sentence();
    }

    cy.get(properties.elements['post-title-input']).type(postTitle);

    cy.wait(3000);
    cy.get(properties.elements['post-title-input']).type('{enter}',{overwrite: true},{capture: 'runner'});

    // El sistema no deja publicar un post con un título largo de más de 255
    cy.get(properties.buttons['publish']).should('not.exist');
  });    
});
