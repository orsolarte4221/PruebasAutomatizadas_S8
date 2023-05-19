describe('Modificar Perfil de Usuario', () => {
    let variables;
    const test_name = 'User_info_update/before'
    let number = 1; 

    before(() => {
      cy.readFile('variables_4.44.json').then((content) => {
        variables = content;
      });
    });
     
      it('Como usuario administrador inicio sesion en Ghost, ingreso a mi perfil y lo edito', () => {
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
        cy.get('#user-name').clear();
        cy.get('#user-slug').clear();
        cy.get('#user-location').clear();
        cy.get('#user-bio').clear();
        cy.wait(1000);
        cy.get('#user-name').type('Test');
        cy.get('#user-slug').type('Test');
        cy.get('#user-location').type('Test');
        cy.get('#user-bio').type('Test');
        cy.wait(1000);
        cy.screenshot(`${test_name}-${number}`,{overwrite: true})
        number++;
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.wait(2000);
        cy.screenshot(`${test_name}-${number}`,{overwrite: true})
        number++;
        });
    });
    