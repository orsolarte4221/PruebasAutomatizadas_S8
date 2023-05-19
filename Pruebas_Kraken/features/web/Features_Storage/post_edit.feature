Feature: Gestionar Post


@user1 @web
Scenario: Hacer Login, Crear Post, Editar un post, Publicar Post y Validar publicación
  Given I navigate to my page "/ghost"
  And I wait for 5 seconds
  When I put identification "usuario_ghost"
  And I put password "usuario_ghost"
  And I click button "sign-in"
  And I wait for 4 seconds
  And I click button "posts"
  And I wait for 3 seconds
  And I click button "new-post"
  And I wait for 3 seconds
  And I enter text "Editable Post"
  And I wait for 2 seconds
  And I send Enter
  And I wait for 4 seconds
  And I click button "back-to-posts-button"
  And I wait for 4 seconds
  And I click the post title is "Editable Post"
  And I wait for 4 seconds
  And I Click Post Update Tittle "New Post Title Name"
  And I send Enter
  And I click button "publish"
  And I wait for 3 seconds
  And I click button "continue"
  And I wait for 3 seconds
  And I click button "confirm-publish"
  And I wait for 3 seconds
Then I see the post title is "New Post Title Name"