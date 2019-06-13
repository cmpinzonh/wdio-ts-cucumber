"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require('assert');
const cucumber_1 = require("cucumber");
const page_1 = require("../../page");
// const googlePage: GooglePage = new GooglePage();
const menuContentPage = new page_1.MenuContentPage();
cucumber_1.Given('I go to {string}', function (site) {
    return __awaiter(this, void 0, void 0, function* () {
        yield browser.url(site);
    });
});
cucumber_1.When('I check the title', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield browser.pause(0);
    });
});
cucumber_1.Then('I should see the title', function () {
    return __awaiter(this, void 0, void 0, function* () {
        assert.equal(browser.getTitle(), 'Google');
    });
});
cucumber_1.When('I click the t-shirt menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield menuContentPage.goToTShirtMenu();
    });
});
cucumber_1.Then('I should see the catalog', function () {
    return __awaiter(this, void 0, void 0, function* () {
        assert.equal(yield $('#layered_block_left .title_block').getText(), 'CATALOG');
    });
});
