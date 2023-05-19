describe('Gestión Post', () => {
  let properties;
  let variables;
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  let numeroPantalla=0;         
  const test_name = 'PostEdit';            

  before(() => {
      cy.readFile('variables.json').then((content) => {
        variables = content;
      });
      cy.readFile('post_properties.json').then((content_post) => {
        properties = content_post;
      });       
  });

  it('Hacer Login, Crear Post, Editar un post, Publicar Post y Validar publicación', () => {

      cy.visit(variables.UrlBase);
      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-visit`,{overwrite: true},{capture: 'runner'});

      cy.get('#identification').type(variables.username);
      cy.get('#password').type(variables.password);
      cy.get(properties.buttons['sign-in']).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-sign-in`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.buttons.posts).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-posts`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.buttons["new-post"]).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-new-post`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.elements["post-title-input"]).type('Editable Post');
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-post-title-input`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.elements["post-title-input"]).type('{enter}');
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-post-title-input-enter`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.buttons["back-to-posts-button"]).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-back-to-posts-button`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.elements["lista-post-title"]).first().contains('Editable Post').click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-select-post`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.elements["post-title-input"]).clear().type('New Post Title Name');
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-edit-post`,{overwrite: true},{capture: 'runner'});

      cy.get(properties.elements["post-title-input"]).type('{enter}');
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-post-title-input-enter`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.buttons["publish"]).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-publish`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.buttons["continue"]).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-continue`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.buttons["confirm-publish"]).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-confirm-publish`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.elements["post-title"]).contains('New Post Title Name').should('exist');
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-validacion-existencia-post`,{overwrite: true},{capture: 'runner'});
  });
});
