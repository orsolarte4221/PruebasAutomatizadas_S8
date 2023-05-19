Feature: Crear una página nueva, publicarla y luego editar el titulo para 
añadirle la palabra "Edited" y finalmente publicarla de nuevo.

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
And I write the New Page´s title "Edit Page Test"
And I wait for 1 seconds
And I write the New Page´s body "Este es un test para publicar una página, despublicarla para posteriormente editar y publicarla nuevamente"
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
And I click on button "edit page"
And I wait for 1 seconds
And I click on button "unpublish page"
And I wait for 1 seconds
And I click on button "confirm unpublish"
And I wait for 1 seconds
And I write the Edited Page´s title "Edit Page Test - Edited"
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
Then the first element in the list of pages should have the title "Edit Page Test - Edited"
And I wait for 2 seconds