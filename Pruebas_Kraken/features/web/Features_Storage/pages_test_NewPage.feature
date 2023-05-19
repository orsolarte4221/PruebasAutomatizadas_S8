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
And I click on button "pages"
And I wait for 1 seconds
And I click on button "New Page"
And I wait for 2 seconds
And I write the New Page´s title "New Page Test"
And I wait for 2 seconds
And I write the New Page´s body "This is a test for a new page"
And I wait for 1 seconds
And I click on button "publish"
And I wait for 1 seconds
And I click on button "continue to final review"
And I wait for 1 seconds
And I click on button "confirm publish"
And I wait for 1 seconds
And I click on button "back to editor"
And I wait for 1 seconds
And I click on button "back to pages"
And I wait for 1 seconds
Then I verify there is a new page named "New Page Test"
And I wait for 1 seconds