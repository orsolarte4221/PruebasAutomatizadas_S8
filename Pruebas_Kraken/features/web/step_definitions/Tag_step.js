const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
// Se obtiene  la ruta absoluta del archivo properties.json
const propertiesPath = path.join(__dirname, 'Tags_properties.json');
// Lee y analiza el archivo properties.json
const properties = JSON.parse(fs.readFileSync(propertiesPath, 'utf8'));
// Se obtiene  la ruta absoluta del archivo properties.json
const variablesPath = path.join(__dirname, 'variables.json');
// Lee y analiza el archivo properties.json
const variables = JSON.parse(fs.readFileSync(variablesPath, 'utf8'));


When('I click Tag Option', async function() {
    let element = await this.driver.$('[data-test-nav="tags"]');
    return await element.click();
})

//Pasos nuevo //

When('I click Tag New', async function() {
    let element = await this.driver.$('.ember-view.gh-btn.gh-btn-primary');
    return await element.click();
})

When('I enter a Tag Name {string}', async function (tagName) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(tagName);
});

When('I enter a Tag Color {string}', async function (color) {
    let element = await this.driver.$('input[placeholder="15171A"]');
    return await element.setValue(color);
});

When('I enter a Tag Description {string}', async function (description) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(description);
});

When('I click Tag Save', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    return await element.click();
})

When('I click to back to the list', async function() {
    let element = await this.driver.$('[data-test-link="tags-back"]');
    return await element.click();
})
//------------------------------------------------------// 

//Pasos editar //
When('I open the first list item to edit', async function () {
    let element = await this.driver.$('.gh-list-chevron');
    await element.click();
  });

When('I enter a New Tag Name {string}', async function (tagName) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(tagName);
});

When('I enter a New Tag Color {string}', async function (color) {
    let element = await this.driver.$('input[placeholder="15171A"]');
    return await element.setValue(color);
});

When('I enter a New Tag Description {string}', async function (description) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(description);
});

When('I enter a New slug {string}', async function (description) {
    let element = await this.driver.$('#tag-slug');
    return await element.setValue(description);
});

//------------------------------------------------------//

//Pasos eliminar //

When('I open the first list item to delete', async function () {
    let element = await this.driver.$('.gh-list-chevron');
    await element.click();
  });

When('I click delete option', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon');
    return await element.click();
})

When('I click to confirm for delete the item', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    return await element.click();
})

//Pasos asignar //
When('I click Pages Option', async function() {
    let element = await this.driver.$('a[data-test-nav="pages"]');
    return await element.click();
})

When('I open the first list item page', async function () {
    let element = await this.driver.$('.gh-post-list-cta.edit');
    await element.click();
  });

When('I open the page settings', async function () {
let element = await this.driver.$('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon');
await element.click();
});

When('I display the list of Tags options', async function () {
let element = await this.driver.$('.ember-power-select-status-icon');
await element.click();
});

When('I select the first list item', async function () {
    let element = await this.driver.$('[data-option-index="0"]');
    await element.click();
    });

When('I close the page settings', async function () {
    let element = await this.driver.$('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon');
    await element.click();
    });

When('I update click on Update option', async function () {
    let element = await this.driver.$('[data-test-button="publish-save"]');
    await element.click();
    });

//pasos miembros//
When('I click Members Option', async function() {
    let element = await this.driver.$('[data-test-nav="members"]');
    return await element.click();
})

When('I click Member New', async function() {
    let element = await this.driver.$('.ember-view.gh-btn.gh-btn-primary');
    return await element.click();
})

When('I enter a Member Name {string}', async function (tagName) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(tagName);
});

When('I enter a Member Mail {string}', async function (color) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(color);
});

When('I click Member Save', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    return await element.click();
})

When('I click exit', async function() {
    let element = await this.driver.$('[data-test-link="members-back"]');
    return await element.click();
})

When('I click Filter Option', async function() {
    let element = await this.driver.$('[data-test-button="members-filter-actions"]');
    return await element.click();
})

When('I enter a Member Mail search {string}', async function (color) {
    let element = await this.driver.$('[aria-label="Search members"]');
    return await element.setValue(color);
});

Then('I should see the member {string} in the list of members', async function(memberName) {
let memberList = await this.driver.$$('.gh-list');
let memberNames = await Promise.all(memberList.map(async function(member) {
    return await member.getText();
}));

let memberFound = false;
for (let i = 0; i < memberNames.length; i++) {
    if (memberNames[i].includes(memberName)) {
    memberFound = true;
    break;
    }
}

if (!memberFound) {
    throw new Error(`Member ${memberName} was not found in the list of members.`);
}
});

//--------------------Then----------------------------------//

Then('I should see the tag {string} in the tags list', async function (tagName) {
    const tagList = await this.driver.$$('h3.gh-tag-list-name');
    let foundtag = false;
    for (let i = 0; i < tagList.length; i++) {
        const text = await tagList[i].getText();
        console.log(`la etiqueta contiene: ${text} y se recibió por parametro ${tagName} `)
        if (text === tagName) {
        foundtag = true;
        break;
        }
    }
    assert.strictEqual(foundtag, true, `New tag ${tagName} not found in ${tagList}`);
    });
    
    Then('I should not see the tag {string} in the tags list', async function (tagName) {
        const tagList = await this.driver.$$('h3.gh-tag-list-name');
        let foundtag = false;
        for (let i = 0; i < tagList.length; i++) {
            const text = await tagList[i].getText();
            console.log(`la etiqueta contiene: ${text} y se recibió por parametro ${tagName} `)
            if (text === tagName) {
            foundtag = true;
            break;
            }
        }
        assert.strictEqual(foundtag, false, `New tag ${tagName} not found in ${tagList}`);
    });