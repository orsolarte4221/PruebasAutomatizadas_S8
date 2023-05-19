Feature: Gestión Post

@user1 @web
Scenario: Hacer Login, ingresar al perfil de usuario, modificar el perfil del usuario, guardar
  Given I navigate to my page "/ghost"
  And I wait for 5 seconds
  When I put identification "usuario_ghost"
  And I put password "usuario_ghost"
  And I click the button "sign-in"
  And I wait for 5 seconds  
  And I click the button "user"
  And I wait for 3 seconds
  And I click the button "profile"
  And I wait for 3 seconds
  And I put the value "Nuevo nombre" in "profile-nombre"
  And I click the button "profile-guardar"
  