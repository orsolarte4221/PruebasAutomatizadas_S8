/** 
 * Funcion para traer del API de Mockaroo los datos para la prueba
 * **/
function getDataPool() {
  const mockarooApiKey = 'e6191250';    
  const url = `https://my.api.mockaroo.com/post_title_test.json?key=${mockarooApiKey}`;

  // Realiza la solicitud HTTP y devuelve la promesa resultante
  return cy.request({
    url: url,
    method: 'GET'
  });
}



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
      
    // Utiliza la función getContent para obtener los datos de post_create desde la API
    getDataPool().then((response) => {
      postData = response.body;
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
 

      cy.get(properties.elements['post-title-input']).type(postData.post_title);
 
      cy.wait(3000);
      cy.get(properties.elements['post-title-input']).type('{enter}',{overwrite: true},{capture: 'runner'});


      cy.get(properties.buttons['publish']).click();
 

      cy.get(properties.buttons['continue']).click();
 

      cy.get(properties.buttons['confirm-publish']).click();
 

      cy.get(properties.elements['post-title']).contains(postData.post_title).should('exist');
  });    
});
