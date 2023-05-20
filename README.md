# MISOPruebasAutomatizadas

# Versiones de las herramientas utilizadas
Este es un repositorio creado para realizar las actividades de pruebas automatizadas

Node Version: 14.21.3
Cypress Version: 12.9.0
Ghost-CLI version: 1.24.0
Kraken-Node Version 1.0.0
Ghost Version 5.40.2 

**Es necesario no tener ninguna página en Draft para que algunas pruebas corran correctarmente**

# Los 120 escenarios de prueba con los datapool de las tres estrategias (a-priori, aleatorias, pseudoaleatorias)
Se desarrollaron los 120 escnearios en la herramienta Cypress, a continuación se deja el link
de que describe el oráculo de las pruebas realizadas con sus respectivas estrategias: 


## Ejecutar Pruebas en Cypress
  1) Clonar el Repositorio
  2) Abrir una terminal en la carpeta del repositorio
  3) Dirigirse a la carpeta "Pruebas_Cypress"
  4) Ejecutar el comando "npm install"
  5) Modificar las credenciales de acceso a ghost 5.40.2 en el archivo **"Pruebas_Cypress/variables.json"**
  6) Modificar el puerto en el que se corre la version de Ghost 5.40.2 en **Pruebas_Cypress/variables.json**
  7) Ejecutar el comando "cypress open"
  8) Configurar el ambiente de pruebas seleccionando la carpeta "Pruebas_Cypress" en el repositorio local
  9) Seleccionar la prueba a correr en la carpeta de Specs. Para esta semana se organizaron las carpetas de las pruebas de la siguiente manera:
    - **e2e/datapool/apriori**  ->Contiene las pruebas que se desarrollaron con la estrategia de datapool a priori. 
    - **e2e/datapool/aleatorio**  ->Contiene las pruebas que se desarrollaron con la estrategia de datapool aleatorio.
    - **e2e/datapool/pseudo-aleatorio**  ->Contiene las pruebas que se desarrollaron con la estrategia de datapool pseudo-aleatorio.

# Descripción de las estregias utilizadas
A continuación se encuentra el enlace donde se explica la forma de implementación de las estrategias utilizads (apriori,aleatorio, pseudoaleatorio): 



# Reportes de incidencias visuales.

https://github.com/users/sebastianmd11/projects/1


# Lista de funcionalidades para pruebas con estrategia de datpool
- Post: Crear un Post
- Post: Editar un Post
- Miembro: Filtrar Miembros
- Pages: Crear nueva página
- Pages: Eliminar Página
- Tag: Eliminar un tag
- Tag: Nuevo Tag
- User: Cambiar contraseña
- User: Modificar información de usuario

