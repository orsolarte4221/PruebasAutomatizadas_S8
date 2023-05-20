/** 
 * Funcion para traer del API de Mockaroo los datos para la prueba
 * **/
function getDataPool() {
  const mockarooApiKey = 'e6191250';    
  const url = `https://my.api.mockaroo.com/post_test_excerpt.json?key=${mockarooApiKey}`;

  // Realiza la solicitud HTTP y devuelve la promesa resultante
  return cy.request({
    url: url,
    method: 'GET'
  });
}



describe('Gestión Post', () => {
  let properties;
  let variables;
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  let numeroPantalla=0;         
  const test_name = 'PostEdit';   
  let postData;  // Se añade la variable para guardar los datos de post_create.json
           

  before(() => {
      cy.readFile('variables.json').then((content) => {
        variables = content;
      });
      cy.readFile('post_properties.json').then((content_post) => {
        properties = content_post;
      });       

    // Utiliza la función getContent para obtener los datos de post_create desde la API
    getDataPool().then((response) => {
      postData = response.body;
    });         

  });

  it('Hacer Login, Crear Post, Editar un post, Publicar Post y Validar publicación', () => {

      cy.visit(variables.UrlBase);
 
      cy.get('#identification').type(variables.username);
      cy.get('#password').type(variables.password);
      cy.get(properties.buttons['sign-in']).click();
  
      cy.wait(3000);
      cy.get(properties.buttons.posts).click();
  
      cy.wait(3000);
      cy.get(properties.buttons["new-post"]).click();
 
      cy.wait(3000);
      cy.get(properties.elements["post-title-input"]).type('Editable Post');
  
      cy.wait(3000);
      cy.get(properties.elements["post-title-input"]).type('{enter}');
  
      cy.wait(3000);
      cy.get(properties.buttons["back-to-posts-button"]).click();
  
      cy.wait(6000);
      cy.get(properties.elements["lista-post-title"]).first().contains('Editable Post').click({force: true} );

      cy.get(properties.elements["post-title-input"]).clear().type(postData.title);
  
      cy.wait(3000);
      cy.get(".koenig-editor__editor").type(postData.body,{ parseSpecialCharSequences: false });
      cy.screenshot(`${test_name}/post_edit_body_special_chart`,{overwrite: true},{capture: 'runner'})
 
      cy.wait(3000);
      cy.get(properties.buttons["settings-menu-toggle"]).click();
      cy.get('textarea[name="post-setting-custom-excerpt"]').type(postData.excerpt_overlimit_300);   
  
      cy.wait(3000);
      cy.get(properties.buttons["publish"]).click({force: true});
  
      cy.get(properties.elements['alerta_roja']).should('contain', 'Validation failed: Excerpt cannot be longer than 300 characters.');

  
    });
});
