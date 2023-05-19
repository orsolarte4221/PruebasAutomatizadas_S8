const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');

// Se obtiene  la ruta absoluta del archivo properties.json
const variablesPath = path.join(__dirname, 'variables.json');
// Lee y analiza el archivo properties.json
const variables = JSON.parse(fs.readFileSync(variablesPath, 'utf8'));

Given('I navigate to my page {string} {string}', async function (page, version) {
    
    let url;

    if (version === '4.44') {
        url = variables.UrlBase_4;
    } else {
        url = variables.UrlBase;
    }
    
    return await this.driver.url(url);
});

When('I enter email {string}', async function (user) {
    let email = variables.username;
    let element = await this.driver.$('#email');
    return await element.setValue(email);
});

When('I enter password {string} {string}', async function (user, version) {
    let password = variables.password;

    let element;

    if (version === '4.44') {
        element = await this.driver.$('input[name="password"]');
    } else {
        element = await this.driver.$('#password');
    }

    return await element.setValue(password);
});

When('I put identification {string} {string}', async function (user, version) {
    let email = variables.username;

    let element;

    if (version === '4.44') {
        element = await this.driver.$('input[name="identification"]');
    } else {
        element = await this.driver.$('#identification');
    }

     
    return await element.setValue(email);
});

When('I put password {string}', async function (user) {
    let password = variables.password;
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});



