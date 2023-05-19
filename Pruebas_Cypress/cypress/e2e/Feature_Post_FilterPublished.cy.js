describe('Gestión Post', () => {
  let properties;
  let variables;
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  let numeroPantalla = 0;  
  const test_name = 'Post_FilterPublished';

  before(() => {
      cy.readFile('variables.json').then((content) => {
        variables = content;
      });
      cy.readFile('post_properties.json').then((content_post) => {
        properties = content_post;
      });        
  });

  it('Hacer Login, Crear un post, publicarlo y consultar los filtros del Post Publish, y buscar el Post Publicado', () => {
      cy.visit(variables.UrlBase);
      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.get('#identification').type(variables.username);
      cy.get('#password').type(variables.password);
      cy.get(properties.buttons['sign-in']).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons.posts).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons["new-post"]).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.elements["post-title-input"]).type('Publish Post');
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.elements["post-title-input"]).type('{enter}');
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons["publish"]).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons["continue"]).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons["confirm-publish"]).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.visit(variables.UrlBase );
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);        
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons["post-published"]).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);      
      cy.get(properties.elements["lista-post-title"]).first().contains('Publish Post').should('exist');
      numeroPantalla++;
      cy.screenshot(`${test_name}/after-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
  });
});
