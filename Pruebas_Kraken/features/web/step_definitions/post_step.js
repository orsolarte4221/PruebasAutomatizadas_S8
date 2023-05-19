const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
// Se obtiene  la ruta absoluta del archivo properties.json
const propertiesPath = path.join(__dirname, 'post_properties.json');
// Lee y analiza el archivo properties.json
const properties = JSON.parse(fs.readFileSync(propertiesPath, 'utf8'));
// Se obtiene  la ruta absoluta del archivo properties.json
const variablesPath = path.join(__dirname, 'variables.json');
// Lee y analiza el archivo properties.json
const variables = JSON.parse(fs.readFileSync(variablesPath, 'utf8'));



When('I click next', async function() {
    let element = await this.driver.$('#loginbutton');
    return await element.click();
})

When('I navigate to {string}', async function (page) {
    let url = variables.UrlBase;
    return await this.driver.url(url);
});


When('I put value {string} in {string}', async function (input_value,input_name) {
    const selector = properties.elements[input_name];
    let element = await this.driver.$(selector);
    return await element.setValue(input_value);
});


When('I click button {string}', async function (buttonName) {
    const button = properties.buttons[buttonName];
    if (button) {
        let element = await this.driver.$(button);
        return await element.click();
    } else {
        throw new Error(`Button "${buttonName}" not found in properties.json`);
    }
});

When('I send Enter', async function () {
    return await this.driver.keys('Enter');
});

When('I click the post title is {string}', async function (expectedTitle) {
    //let element = await this.driver.$x("//h3[contains(@class, 'gh-content-entry-title') and contains(., '${expectedTitle}')]");
    const selector = properties.elements['lista-post-title'];
    let element = await this.driver.$(selector);
    assert(element, 'Element not found');
    return await element.click();    
});

When('I Click Post Update Tittle {string}', async function (expectedTitle) {
    const selector = properties.elements['post-title-input'];
    const element = await this.driver.$(selector);
    return await element.setValue(expectedTitle);
    
});

Then('I see the post title is {string}', async function (expectedTitle) {
    const selector = properties.elements['post-title'];
    const element = await this.driver.$(selector);
    const actualTitle = await element.getText();
    assert.strictEqual(actualTitle, expectedTitle, `Expected post title to be "${expectedTitle}", but found "${actualTitle}"`);
});

Then('I Cant Found Post Tittle {string}', async function (expectedTitle) {
    const selector = properties.elements['post-title-input'];
    const element = await this.driver.$(selector);
    const actualTitle = await element.getText();
    assert.notStrictEqual(actualTitle, expectedTitle); 
});

Then('I Find Post Tittle {string}', async function (expectedTitle) {
    const selector = properties.elements['article-title'];
    const element = await this.driver.$(selector);
    const actualTitle = await element.getText();
    assert.strictEqual(actualTitle, expectedTitle, `Expected post title to be "${expectedTitle}", but found "${actualTitle}"`); 
});

Then('I Cant Find Member {string}', async function (expectedTitle) {
    const selector = properties.elements['miembro-titulo-nombre'];
    const element = await this.driver.$(selector);
    const actualTitle = await element.getText();
    assert.notStrictEqual(actualTitle, expectedTitle); 
});
