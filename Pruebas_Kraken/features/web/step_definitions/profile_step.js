const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
// Se obtiene  la ruta absoluta del archivo profile_properties.json
const propertiesPath = path.join(__dirname, 'profile_properties.json');
// Lee y analiza el archivo properties.json
const properties = JSON.parse(fs.readFileSync(propertiesPath, 'utf8'));
// Se obtiene  la ruta absoluta del archivo profile_properties.json
const variablesPath = path.join(__dirname, 'variables.json');
// Lee y analiza el archivo properties.json
const variables = JSON.parse(fs.readFileSync(variablesPath, 'utf8'));

When('I navigate {string}', async function (page) {
    let url = variables.UrlBase;
    return await this.driver.url(url);
});

When('I put the value {string} in {string}', async function (input_value,input_name) {
    const selector = properties.elements[input_name];
    let element = await this.driver.$(selector);
    return await element.setValue(input_value);
});

When('I click the button {string}', async function (buttonName) {
    const button = properties.buttons[buttonName];
    if (button) {
        let element = await this.driver.$(button);
        return await element.click();
    } else {
        throw new Error(`Button "${buttonName}" not found in properties.json`);
    }
});

When('I put the password {string} in {string}', async function (input_value,input_name) {
    const selector = properties.elements[input_name];
    let password = variables.password;
    let element = await this.driver.$(selector);
    return await element.setValue(password);
});


