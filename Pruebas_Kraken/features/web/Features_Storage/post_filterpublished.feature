Feature: Gestionar Post


@user1 @web
Scenario: Hacer Login, Crear un post, publicarlo y consultar los filtros del Post Publish, y buscar el Post Publicado
  Given I navigate to my page "/ghost"
  And I wait for 5 seconds
  When I put identification "usuario_ghost"
  And I put password "usuario_ghost"
  And I click button "sign-in"
  And I wait for 5 seconds
  And I click button "posts"
  And I wait for 5 seconds
  And I click button "new-post"
  And I wait for 5 seconds
  And I enter text "Publish Post"
  And I wait for 5 seconds
  And I send Enter
  And I click button "publish"
  And I wait for 5 seconds
  And I click button "continue"
  And I wait for 10 seconds
  And I click button "confirm-publish"
  And I wait for 5 seconds
  And I navigate to "/ghost"
  And I wait for 5 seconds
  And I click button "post-published"
  And I wait for 5 seconds
  And I click the post title is "Publish Post"
  And I wait for 5 seconds
  And I click button "settings-menu-toggle"
  And I wait for 5 seconds
  And I click button "post-view-link"
  And I wait for 5 seconds
Then I Find Post Tittle "Publish Post"
  