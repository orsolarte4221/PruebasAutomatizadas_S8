Feature: Gestionar Post


@user1 @web
Scenario: Hacer Login, Crear un post, eliminar Post y verificar la eliminacion
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
  And I enter text "Deleteable Post"
  And I wait for 3 seconds
  And I send Enter
  And I wait for 3 seconds
  And I click button "back-to-posts-button"
  And I wait for 4 seconds
  And I click the post title is "Deleteable Post"
  And I wait for 4 seconds
  And I click button "settings-menu-toggle"
  And I wait for 4 seconds
  And I click button "delete-post-button"
  And I wait for 4 seconds
  And I click button "confirm-delete-button"
  And I wait for 4 seconds
  And I click the post title is "Deleteable Post"  
  And I wait for 5 seconds
Then I Cant Found Post Tittle "Deleteable Post"