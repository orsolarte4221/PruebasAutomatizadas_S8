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
  And I click Tag Option
    And I wait for 5 seconds
  And I open the first list item to edit
    And I wait for 5 seconds
  And I enter a New Tag Name "New Tag Example Test"
    And I wait for 2 seconds
  And I enter a New Tag Color "1c0df8"
    And I wait for 2 seconds
  And I enter a New slug "New_Tag_Example_Test"
    And I wait for 2 seconds
  And I enter a New Tag Description "Esta es una descripcion nueva de prueba para validar la funcionalidad de editar Tags"
    And I wait for 2 seconds
  And I click Tag Save
    And I wait for 5 seconds
  And I click to back to the list
    And I wait for 5 seconds
Then I should see the tag "New Tag Example Test" in the tags list
  And I wait for 5 seconds