describe('Gestión Post', () => {
  let properties;
  let variables;
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  let numeroPantalla=0;
  const test_name = 'PostCreate_4.44';    

  before(() => {
    cy.readFile('variables_4.44.json').then((content) => {
      variables = content;
    });
    cy.readFile('post_properties_4_44.json').then((content_post) => {
      properties = content_post;
    });
  });

  it('Hacer Login, Crear un post, publicarlo y consultar la publicación', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // Esto previene que las excepciones no detectadas en tu código
      // hagan que las pruebas fallen.
      return false;
    });    

      cy.visit(variables.UrlBase);
      cy.wait(4000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.get(properties.elements["login-identificacion"]).type(variables.username);
      cy.get(properties.elements["login-password"]).type(variables.password);
      cy.get(properties.buttons['sign-in']).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get('body').then(body => {
        if (body.find(properties.buttons['alert-new-version']).length > 0) {   // Comprueba si la barra informativa de ghost 5.0 existe
          cy.get(properties.buttons['alert-new-version']).click();             // Si existe, se cierra antes de continuar con las pruebas
        }
      });

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons['posts']).first().click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons['new-post']).first().click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.elements['post-title-input']).type('Test Post');
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.elements['post-title-input']).type('{enter}');

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons['publish']).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});


      cy.wait(3000)
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons["confirm-publish"]).click()
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons['continue']).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.elements['post-title-input']).should('have.value', 'Test Post');
  });    
});
