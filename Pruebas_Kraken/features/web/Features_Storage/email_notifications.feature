Feature: Gestión Profile

@user1 @web
Scenario: Hacer Login, ingresar al perfil de usuario, modificar el perfil del usuario, guardar
  Given I navigate "/ghost"
  And I wait for 5 seconds
  When I put identification "usuario_ghost"
  And I put password "usuario_ghost"
  And I click button "sign-in"
  And I wait for 5 seconds  
  And I click the button "user"
  And I wait for 3 seconds
  And I click the button "profile"
  And I wait for 3 seconds
  And I click the button "switch"
  And I click the button "profile-guardar"