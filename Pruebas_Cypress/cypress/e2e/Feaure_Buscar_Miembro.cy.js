const test_name = 'Members_FilterMember/after-'
const FileNum = 1


describe('Buscar un miembro', () => {
    let properties;
    let variables;
    let contador= FileNum;
  
    before(() => {
        cy.readFile('variables.json').then((content) => {
          variables = content;
        });
        cy.readFile('post_properties.json').then((content_post) => {
          properties = content_post;
        });
      });
  
    it('Como usuario administrador inicio sesion en Ghost, creo un elemento Member y lo busco', () => {
      cy.viewport(1200, 1500);
      
      // Inicio de sesion
      cy.visit(variables.UrlBase + '/#/signin')
      cy.get('#identification').type(variables.username)
      cy.get('#password').type(variables.password)
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(2000);
      contador++; 

      cy.get('[data-test-button="sign-in"]').click();
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 

  
      // Crear un nuevo miembro
      cy.get('[data-test-nav="members"]').click();
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 

      cy.get('.ember-view.gh-btn.gh-btn-primary').click();
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(2000);
      contador++; 

      cy.get('#member-name').scrollIntoView().type('Juan Perez Test User');
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 

      cy.get('#member-email').scrollIntoView().type('juanperez@gmail.com');
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(2000);
      contador++; 

      cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 
  
      // Buscar un miembro
      cy.get('[data-test-link="members-back"]').click();
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 

      cy.get('[aria-label="Search members"]').type('juanperez@gmail.com');
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 
  
      // Verificar si el miembro fue encontrado
      cy.get('.gh-list').then((members) => {
        let memberFound = false;
        members.each((index, member) => {
          if (member.innerText.includes('juanperez@gmail.com')) {
            memberFound = true;
            return false;
          }
        });
        if (!memberFound) {
          throw new Error('Member juanperez@gmail.com was not found in the list of members.');
        }
      });
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(5000);
      contador++; 

    });
  });
  