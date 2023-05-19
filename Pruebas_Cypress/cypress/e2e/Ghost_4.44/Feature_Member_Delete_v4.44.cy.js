describe('Gestión Post', () => {
    let properties;
    let variables;
    const test_name = 'MemberDelete_4.44';
    let numeroPantalla=0;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  
    before(() => {
        cy.readFile('variables_4.44.json').then((content) => {
          variables = content;
        });
        cy.readFile('post_properties_4_44.json').then((content_post) => {
          properties = content_post;
        });
      });
  
      it('Hacer Login, crear un miembro, eliminar un miembro y validar que el miembro ha sido eliminado', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
          // Esto previene que las excepciones no detectadas en tu código
          // hagan que las pruebas fallen.
          return false;
        });  

        //cy.viewport(1440, 900);
        cy.visit(variables.UrlBase);
        cy.wait(4000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

        cy.get(properties.elements["login-identificacion"]).type(variables.username);
        cy.get(properties.elements["login-password"]).type(variables.password);
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
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
        cy.get(properties.buttons.miembros).first().click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

        cy.wait(3000);
        numeroPantalla++;       
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
        cy.get(properties.buttons["miembros-nuevo"]).first().click();
        numeroPantalla++;       
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

        cy.wait(3000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
        cy.get(properties.elements["miembro-nombre"]).type(`${timestamp}Ana Maria`, {force: true});
        cy.get(properties.elements["miembro-correo"]).type(`${timestamp}anamaria@correo.com`, {force: true});
        cy.contains(properties.buttons["miembro-guardar"]).click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

        
        cy.wait(3000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
        cy.get(properties.buttons.miembros).first().click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

        cy.wait(3000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
        cy.get(properties.buttons["miembro-primero"]).filter((_, element) => {
          return Cypress.$(element).text() === `${timestamp}Ana Maria`;
       }).click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

        cy.wait(3000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
        cy.get(properties.buttons["miembro-acciones"]).click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});


        cy.wait(3000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
        cy.contains(properties.buttons["miembro-eliminar"], 'Delete member').click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

        cy.wait(3000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
        cy.get(properties.buttons["miembro-eliminar-confirmacion"]).click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});


        cy.wait(3000);
        cy.get('body').then(($body) => {
          // Comprueba si el elemento existe en el DOM.
          if ($body.find(properties.buttons["miembro-primero"]).length > 0) {
            // Si el elemento existe, hace clic en el primero
            numeroPantalla++;
            cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
            cy.get(properties.buttons["miembro-primero"]).first().click();
            numeroPantalla++;
            cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});

            cy.wait(3000);    
            numeroPantalla++;
            cy.screenshot(`${test_name}/before-${numeroPantalla}`,{overwrite: true},{capture: 'runner'});
            cy.get(properties.elements["miembro-titulo-nombre"]).should('not.contain', `${timestamp}Ana Maria`);

          }else{
              // Si el elemento no existe, lanza una aserción de éxito.
              expect(true).to.equal(true);            
          }
        });


      });
  });