Feature: Utilizar un Tag en una Pagina

@user1 @web
Scenario: Como usuario administrador inicio sesion en Ghost, seleciono una pagina y le agrego un Tag
  Given I navigate to my page "/ghost"
  And I wait for 5 seconds
  When I put identification "usuario_ghost"
    And I wait for 2 seconds
  And I put password "usuario_ghost"
    And I wait for 2 seconds
  And I click button "sign-in"
    And I wait for 5 seconds
  And I click Pages Option ADJ
    And I wait for 5 seconds
  And I open the first list item page ADJ
    And I wait for 5 seconds
  And I open the page settings ADJ
    And I wait for 5 seconds
  And I display the list of Tags options ADJ
    And I wait for 5 seconds
  And I select the first list item ADJ
    And I wait for 5 seconds
  And I close the page settings ADJ
    And I wait for 5 seconds
  And I update click on Update option ADJ
    And I wait for 5 seconds