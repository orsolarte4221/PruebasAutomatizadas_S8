describe('Gestión Post', () => {
  let properties;
  let variables;
  let numeroPantalla=0;
  const test_name = 'PostCreate';    

  let postData;  // Se añade la variable para guardar los datos de post_create.json
  

  before(() => {
      cy.readFile('variables.json').then((content) => {
        variables = content;
      });
      cy.readFile('post_properties.json').then((content_post) => {
        properties = content_post;
      });  
      
      cy.readFile('cypress/e2e/datapool/apriori/post_create.json').then((content_post_create) => {  // Se añade la lectura del archivo post_create.json
        postData = content_post_create;
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
 

      cy.get(properties.elements['post-title-input']).type(postData.postexertp_test_onlimit.title,{ parseSpecialCharSequences: false });
 
      cy.wait(3000);
      cy.get(properties.elements['post-title-input']).type('{enter}',{overwrite: true},{capture: 'runner'});
     //add special data
     cy.get(".koenig-editor__editor").type(postData.postexertp_test_onlimit.body,{ parseSpecialCharSequences: false });
     cy.screenshot(`${test_name}/post_edit_body_special_chart`,{overwrite: true},{capture: 'runner'})

     cy.wait(3000);
     cy.get(properties.buttons["settings-menu-toggle"]).click();
     cy.get('textarea[name="post-setting-custom-excerpt"]').type(postData.postexertp_test_onlimit.excerpt_onlimit);     

      cy.get(properties.buttons['publish']).click({force: true} );
 

      cy.get(properties.buttons['continue']).click();
 

      cy.get(properties.buttons['confirm-publish']).click();
 

      cy.get(properties.elements['post-title']).contains(postData.postexertp_test_onlimit.title,{ parseSpecialCharSequences: false }).should('exist');
  });    
});
