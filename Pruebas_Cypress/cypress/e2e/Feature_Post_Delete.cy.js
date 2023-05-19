describe('Gestión Post', () => {
  let properties;
  let variables;
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  let numeroPantalla=0;   
  const test_name = 'PostDelete';         

  before(() => {
      cy.readFile('variables.json').then((content) => {
        variables = content;
      });
      cy.readFile('post_properties.json').then((content_post) => {
        properties = content_post;
      });       
  });

  it('Hacer Login, Crear un post, eliminar Post y verificar la eliminacion', () => {

      cy.visit(variables.UrlBase);
      cy.wait(5000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-visit`,{overwrite: true},{capture: 'runner'});

      cy.get('#identification').type(variables.username);
      cy.get('#password').type(variables.password);
      cy.get(properties.buttons['sign-in']).click();
      cy.wait(3000);
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
      cy.get(properties.elements["post-title-input"]).type('Deleteable Post');
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-post-title-input`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.elements["post-title-input"]).type('{enter}');

      cy.wait(3000);
      cy.get(properties.buttons["back-to-posts-button"]).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-back-to-posts-button`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.elements["lista-post-title"]).first().contains('Deleteable Post').click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-lista-post-title`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.buttons["settings-menu-toggle"]).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-settings-menu-toggle`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.buttons["delete-post-button"]).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-delete-post-button`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.buttons["confirm-delete-button"]).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-confirm-delete-button`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.elements["lista-post-title"]).first().click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-lista-post-title`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.elements["post-title-input"]).contains('Deleteable Post').should('not.exist',{overwrite: true},{capture: 'runner'});
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-validacion-no-existencia-post`,{overwrite: true},{capture: 'runner'});
    });
});
