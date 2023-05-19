describe('Modificar Perfil de Usuario', () => {
    let variables;
    const test_name = 'User_Password_update/before'
    let number = 1;

    before(() => {
      cy.readFile('variables_4.44.json').then((content) => {
        variables = content;
      });
    });
    
     
      it('Como usuario administrador inicio sesion en Ghost, ingreso a mi perfil y modifico mi contraseña', () => {
        cy.visit(variables.UrlBase + '/#/signin');
        cy.wait(2000);
        cy.screenshot(`${test_name}-${number}`,{overwrite: true})
        number++;
        cy.get('input[name="identification"]').type(variables.username);
        cy.wait(2000);
        cy.get('input[name="password"]').type(variables.password);
        cy.wait(2000);
        cy.screenshot(`${test_name}-${number}`,{overwrite: true})
        number++;
        cy.get('button.login').click();
        cy.wait(2000);
        cy.screenshot(`${test_name}-${number}`,{overwrite: true})
        number++;
        cy.get('[class="gh-user-avatar relative"]').click();
        cy.wait(2000);
        cy.screenshot(`${test_name}-${number}`,{overwrite: true})
        number++;
        cy.get('[class="ember-view dropdown-item"]').last().click();
        cy.wait(2000);
        cy.screenshot(`${test_name}-${number}`,{overwrite: true})
        number++;
        cy.get('[id="user-password-old"]').type(variables.password);
        cy.wait(2000);
        cy.get('#user-password-new').type(variables.password);
        cy.wait(2000);
        cy.get('#user-new-password-verification').type(variables.password);
        cy.wait(2000);
        cy.screenshot(`${test_name}-${number}`,{overwrite: true})
        number++;
        cy.get('[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click();
        cy.wait(2000);
        cy.screenshot(`${test_name}-${number}`,{overwrite: true})
        number++;
        });
    });
    