Feature: Editar un Tag

@user1 @web
Scenario: Como usuario administrador inicio sesion en Ghost, busco el primer elemento de la lista Tag y lo edito
  Given I navigate to my page "/ghost"
  And I wait for 5 seconds
  When I put identification "usuario_ghost"
    And I wait for 2 seconds
  And I put password "usuario_ghost"
    And I wait for 2 seconds
  And I click button "sign-in"
    And I wait for 5 seconds
  And I click Tag Option ADJ
    And I wait for 5 seconds
  And I open the first list item to edit ADJ
    And I wait for 5 seconds
  And I enter a New Tag Name "New Tag Example Test" ADJ
    And I wait for 2 seconds
  And I enter a New Tag Color "1c0df8" ADJ
    And I wait for 2 seconds
  And I enter a New slug "New_Tag_Example_Test" ADJ
    And I wait for 2 seconds
  And I enter a New Tag Description "Esta es una descripcion nueva de prueba para validar la funcionalidad de editar Tags" ADJ
    And I wait for 2 seconds
  And I click Tag Save ADJ
    And I wait for 5 seconds
  And I click to back to the list ADJ
    And I wait for 5 seconds
Then I should see the tag "New Tag Example Test" in the tags list ADJ
  And I wait for 5 seconds