Feature: Buscar un miembro

@user1 @web
Scenario: Como usuario administrador inicio sesion en Ghost, creo un elemento Member y lo busco
  Given I navigate to my page "/ghost"
  And I wait for 5 seconds
  When I put identification "usuario_ghost"
    And I wait for 2 seconds
  And I put password "usuario_ghost"
    And I wait for 2 seconds
  And I click button "sign-in"
    And I wait for 5 seconds
  And I click Members Option ADJ
    And I wait for 5 seconds
  And I click Member New ADJ
    And I wait for 2 seconds
  And I enter a Member Name "Juan Perez Test User" ADJ
    And I wait for 2 seconds
  And I enter a Member Mail "Tstusermail@gmail.com" ADJ
    And I wait for 2 seconds
  And I click Member Save ADJ
    And I wait for 5 seconds
  And I click exit ADJ
    And I wait for 5 seconds
  And I enter a Member Mail search "Tstusermail@gmail.com" ADJ
    And I wait for 5 seconds
Then I should see the member "Tstusermail@gmail.com" in the list of members ADJ
    And I wait for 5 seconds