Feature: Crear una página nueva y publicarla

@user1 @web
Scenario: Como usuario deseo realizar inicio de sesión y poder crear una nueva página en la aplicación
Given I navigate to page "http://localhost:2368/ghost/" 
And I wait for 2 seconds
When I put identification "usuario_ghost"
And I wait for 1 seconds
And I enter password "usuario_ghost"
And I click on button "next"
And I wait for 1 seconds
And I click on button "members"
And I wait for 1 seconds
And I click on button "new member"
And I wait for 1 seconds
And I write "name" input "Sebastian"
And I wait for 1 seconds
And I write "email" input "Sebastian@gmail.com"
And I wait for 1 seconds
And I write "note" input "Esta es una nota para el nuevo miembro sebastian"
And I wait for 1 seconds
And I click on button "save member"
And I wait for 1 seconds
And I click on button "members"
And I wait for 1 seconds
Then I should see the new member "Sebastian" in the members list
And I wait for 2 seconds
