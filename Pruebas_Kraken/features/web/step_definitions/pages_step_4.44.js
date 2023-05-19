const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

const fs = require('fs');
const path = require('path');
// Se obtiene  la ruta absoluta del archivo properties.json
const propertiesPath = path.join(__dirname, 'pages_properties.json');
// Lee y analiza el archivo properties.json
const properties = JSON.parse(fs.readFileSync(propertiesPath, 'utf8'));


When('I write the Edited Page´s title {string}', async function (title) {
    let element = await this.driver.$('textarea[placeholder="Page title"]');
    return await element.setValue(title);
});


Then('the first element in the list of pages should have the title {string}', async function (expectedTitle) {
    const elements = await this.driver.$$('h3.gh-content-entry-title');
  
    const firstElement = elements[0];
    const text = await firstElement.getText();
  
    assert.strictEqual(text, expectedTitle);
  });

Then('there should be exactly 1 draft page', async function () {
const draftElements = await this.driver.$$('span.draft');
assert.strictEqual(draftElements.length, 1);
});

When('I write {string} input {string}', async function (inputName, newUser) {
    const input = properties.inputs[inputName];
    if (input) {
        let element = await this.driver.$(input);
        return await element.setValue(newUser);
    } else {
        throw new Error(`Input "${inputName}" not found in properties.json`);
    }
});

Then('I should see the new member {string} in the members list', async function (memberName) {
    const memberList = await this.driver.$$('h3.gh-members-list-name');
    let foundMember = false;
  
    for (let i = 0; i < memberList.length; i++) {
      const text = await memberList[i].getText();
      console.log(`la etiqueta contiene: ${text} y se recibió por parametro ${memberName} `)
      if (text === memberName) {
        foundMember = true;
        break;
      }
    }
  
    assert.strictEqual(foundMember, true, `New member ${memberName} not found in ${memberList}`);
  });