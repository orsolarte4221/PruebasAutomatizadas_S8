Feature: Gestión Post

@user1 @web
Scenario: Hacer Login, crear un miembro, eliminar un miembreo, validar que el miembro ha sido eliminado
  Given I navigate to my page "/ghost"
  And I wait for 5 seconds
  When I put identification "usuario_ghost"
  And I put password "usuario_ghost"
  And I click button "sign-in"
  And I wait for 5 seconds  
  And I click button "miembros"
  And I wait for 3 seconds
  And I click button "miembros-nuevo"
  And I wait for 3 seconds
  And I put value "Ana Maria" in "miembro-nombre"
  And I put value "anamaria@correo.com" in "miembro-correo"
  And I click button "miembro-guardar"
  And I wait for 4 seconds
  And I click button "miembros"
  And I wait for 4 seconds
  And I click button "miembro-primero"
  And I wait for 4 seconds
  And I click button "miembro-acciones"
  And I wait for 2 seconds
  And I click button "miembro-eliminar"
  And I wait for 3 seconds
  And I click button "miembro-eliminar-confirmacion"
  And I wait for 4 seconds
  And I click button "miembro-primero"
  And I wait for 4 seconds
Then I Cant Find Member "Ana Maria"
  