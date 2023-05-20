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
Se desarrollaron los 120 escearios en la herramienta Cypress, a continuación se deja el link
de que describe el oráculo de las pruebas realizadas con sus respectivas estrategias: 
https://docs.google.com/spreadsheets/d/1gVM5PM4aSzjrGK2L50b_i-QxFjsn8CHwuPp6mAk6UoM/edit?usp=sharing

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
A continuación se encuentra el enlace donde se explica la forma de implementación de las estrategias utilizadas (apriori,aleatorio, pseudoaleatorio): 
https://docs.google.com/document/d/1I37TNeVeijRIs9NRlNPq2tCz10bPPuxfTw8sCiTqeQQ/edit

# Reportes de errores encontrados.
[https://github.com/users/sebastianmd11/projects/1](https://github.com/users/sebastianmd11/projects/4/views/1)


