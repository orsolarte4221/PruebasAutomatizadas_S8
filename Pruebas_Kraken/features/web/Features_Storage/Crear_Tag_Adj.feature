Feature: Crear un Tag nuevo

@user1 @web
Scenario: Como usuario administrador inicio sesion en Ghost y creo un elemento Tag
  Given I navigate to my page "/ghost"
  And I wait for 5 seconds
  When  I put identification "usuario_ghost"
    And I wait for 2 seconds
  And  I put password "usuario_ghost"
    And I wait for 2 seconds
  And  I click button "sign-in"
    And I wait for 5 seconds
  And I click Tag Option ADJ
    And I wait for 5 seconds
  And I click Tag New ADJ
    And I wait for 2 seconds
  And I enter a Tag Name "Tag Example Test" ADJ
    And I wait for 2 seconds
  And I enter a Tag Color "f20707" ADJ
    And I wait for 2 seconds
  And I enter a Tag Description "Esta es una descripcion de prueba para validar la funcionalidad de crear Tags" ADJ
    And I wait for 2 seconds
  And I click Tag Save ADJ
    And I wait for 5 seconds
  And I click to back to the list ADJ
    And I wait for 5 seconds
Then I should see the tag "New Tag Example Test" in the tags list ADJ
  And I wait for 5 seconds

