
/** 
 * Funcion para traer del API de Mockaroo los datos para la prueba
 * **/
function getDataPool() {
  const mockarooApiKey = 'e6191250';    
  const url = `https://my.api.mockaroo.com/post.json?key=${mockarooApiKey}`;

  // Realiza la solicitud HTTP y devuelve la promesa resultante
  return cy.request({
    url: url,
    method: 'GET'
  });
}

describe('Gestión Post', () => {
  let properties;
  let variables;
  let numeroPantalla = 0;
  const test_name = 'PostCreate';    
  let postData;

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

    // Usa los datos obtenidos desde la API para ingresar el título del post
    cy.get(properties.elements['post-title-input']).type(postData.titleoverlimit_255);

    cy.wait(3000);
    cy.get(properties.elements['post-title-input']).type('{enter}',{overwrite: true},{capture: 'runner'});

    // El sistema no deja publicar un post con un título largo de más de 255
    cy.get(properties.buttons['publish']).should('not.exist');
  });    
});