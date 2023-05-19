Feature: Gestión Profile

@user1 @web
Scenario: Hacer Login, crear un miembro, modificar un miembreo, validar que el miembro ha sido modificado
  Given I navigate "/ghost"
  And I wait for 5 seconds
  When I put identification "usuario_ghost"
  And I put password "usuario_ghost"
  And I click button "sign-in"
  And I wait for 5 seconds  
  And I click the button "miembros"
  And I wait for 3 seconds
  And I click the button "miembros-nuevo"
  And I wait for 3 seconds
  And I put the value "Nuevo miembro" in "miembro-nombre"
  And I put the value "nuevo2@correo.com" in "miembro-correo"
  And I click the button "miembro-guardar"
  And I wait for 4 seconds
  And I click the button "miembros"
  And I wait for 4 seconds
  And I click the button "miembro-primero"
  And I wait for 4 seconds
  And I put the value "Modificar miembro" in "miembro-nombre"
  And I wait for 2 seconds
  And I click the button "miembro-guardar"
  And I wait for 4 seconds
  And I click the button "miembro-primero"
  And I wait for 4 seconds
  