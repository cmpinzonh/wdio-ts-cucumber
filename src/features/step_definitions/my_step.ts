const assert = require('assert');
import { Given, When, Then} from 'cucumber';
import { GooglePage, MenuContentPage } from '../../page';

// const googlePage: GooglePage = new GooglePage();
const menuContentPage: MenuContentPage = new MenuContentPage();

Given('I go to {string}', async function (site) {
  await browser.url(site);
});

When('I check the title', async function () {

});

Then('I should see the title', async function () {
  assert.equal(browser.getTitle(), 'Google');
});

When('I click the t-shirt menu', async function () {
  await menuContentPage.goToTShirtMenu();
});

Then('I should see the catalog', async function () {
  assert.equal(await $('#layered_block_left .title_block').getText(), 'CATALOG');
});
