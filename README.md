# MISOPruebasAutomatizadas

# Documento de estrategia de pruebas
https://drive.google.com/file/d/14fTRObXjMAm0t-Rc4HYY6OSfctGWPkFQ/view?usp=drive_link

# Video explicacion de la estrategia
https://www.canva.com/design/DAFkJiKI3lE/tGQnmZzF5f-xiuEOSuxbOw/watch?utm_content=DAFkJiKI3lE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink

# Versiones de las herramientas utilizadas
Este es un repositorio creado para realizar las actividades de pruebas automatizadas

Node Version: 14.21.3
Cypress Version: 12.9.0
Ghost-CLI version: 1.24.0
Kraken-Node Version 1.0.0
Ghost Version 5.40.2 

**Es necesario no tener ninguna página en Draft para que algunas pruebas corran correctarmente**

# Los 130 escenarios de prueba con los datapool de las tres estrategias (a-priori, aleatorias, pseudoaleatorias)
Se desarrollaron los 120 escearios en la herramienta Cypress, a continuación se deja el link
de que describe el oráculo de las pruebas realizadas con sus respectivas estrategias: 
https://docs.google.com/spreadsheets/d/1gVM5PM4aSzjrGK2L50b_i-QxFjsn8CHwuPp6mAk6UoM/edit?usp=sharing

*En la semana 8 se agregan 10 escenenarios adicionales en la ejecución de estrategia de pruebas con Datapool*


## Pruebas Manuales:
A continuación se relación el inventario de pruebas exploratorias: 
https://docs.google.com/spreadsheets/d/1joYjKJC0qUsNV_ruj0-BSPM4LPODZk0M/edit?rtpof=true&sd=true#gid=54945760


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

## Ejecutar Pruebas en Kraken
  1) Clonar el Repositorio
  2) Abrir una terminal en la carpeta del repositorio
  3) Dirigirse a la carpeta "Pruebas_Kraken"
  4) Ejecutar el comando "npm install"
  5) Abrir el proyecto en un editor como VS Code
  6) Modificar las credenciales de acceso a ghost en el archivo **"Pruebas_Kraken/features/web/step_definitions/variables.json"**
  7) Mover la prueba o las pruebas a ejecutar desde el folder **Pruebas_Kraken/feature/web/Feature_Storage** al folder **Pruebas_Kraken/feature**
  8) Ejecutar el comando "npx kraken-node run"
  9) Las capturas de pantalla generadas pueden ser revisadas en la ruta **Pruebas_Kraken/reports**
 
## Ejecutar el Monkey
  1) Clonar el Repositorio
  2) Abrir una terminal en la carpeta del repositorio
  3) Dirigirse a la carpeta "Monkey-Cypress"
  4) Ejecutar el comando "npm install"
  5) Cambiar las credenciales de acceso en monkey-config.json y smart-monkey-config.json
  6) Ejecutar el monkey con el comando **npx cypress run --config-file smart-monkey-config.json**

## Ejecutar Pruebas en Rippet
* Clonar el Repositorio
* Abrir una terminal en la carpeta del repositorio
* Dirigirse a la carpeta "RIPuppetCoursera"
* Ejecutar el comando "npm install"
* Configure las contraseñas del sitio Ghost en el archivo config.json
![image](https://github.com/orsolarte4221/PruebasAutomatizadas_S8/assets/124013367/f5b7ff32-d476-4660-8261-a0fa55dfeaa0)
* Ejecute en la terminal el comando node index.js
* En la pantalla de inicio de sesión introduzca los parametros de sesión para continuar.
* El Rippet Inicia Ejecución.
* Monitoree el rippet, si se queda atascado debe reconfigurar el index.js
* Los resultados de la ejecución los encontratá en la carpeta  RIPuppetCoursera/results 

## Ejecutar pruebas de regresión visual: Código del Reporte de comparación en html
* Dentro de la carpeta Pruebas_Visual_Resemble/results se encuentran los resultados de los escenarios de cada prueba de regresion visual. Por cada funcionalidad se crea una carpeta que contiene internamente los screenshots de la versión de Ghost 4.44 y la versión de Ghost 5.40 (before y after). Dentro de cada carpeta contiene los screenshots de comparación y el archivo reporte.html que muestra el reporte por cada funcionalidad.
  
# Descripción de las estregias utilizadas
A continuación se encuentra el enlace donde se explica la forma de implementación de las estrategias utilizadas (apriori,aleatorio, pseudoaleatorio): 
https://docs.google.com/document/d/1I37TNeVeijRIs9NRlNPq2tCz10bPPuxfTw8sCiTqeQQ/edit

# Reportes de errores encontrados.
[https://github.com/users/orsolarte4221/projects/1](https://github.com/users/orsolarte4221/projects/1)


