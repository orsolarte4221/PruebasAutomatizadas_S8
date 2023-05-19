Feature: Eliminar un Tag

@user1 @web
Scenario: Como usuario administrador inicio sesion en Ghost, busco el primer elemento de la lista Tag y lo elimino
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
  And I click Tag New
    And I wait for 2 seconds
  And I enter a Tag Name "000001 Tag for be deleted Test"
    And I wait for 2 seconds
  And I enter a Tag Color "f20707"
    And I wait for 2 seconds
  And I enter a Tag Description "Esta es una descripcion de prueba para validar la funcionalidad de crear Tags"
    And I wait for 2 seconds
  And I click Tag Save
    And I wait for 5 seconds
  And I click to back to the list
    And I wait for 5 seconds
  And I open the first list item to delete
    And I wait for 5 seconds
  And I click delete option
    And I wait for 5 seconds
  And I click to confirm for delete the item
    And I wait for 5 seconds
Then I should not see the tag "000001 Tag for be deleted Test" in the tags list
