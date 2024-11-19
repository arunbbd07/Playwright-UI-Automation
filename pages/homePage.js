//import { Page } from '@playwright';

// @ts-check

class HomePage {

    constructor(page) {

        this.page = page;
        this.signup = page.locator("//a[@href='/login']");
        this.products = page.locator("//a[@href='/products']");
        this.deleteAccount = page.locator('//a[@href="/delete_account"]');
        //this.subscription = page.locator('//h2[text()="Subscription"]');
        this.fuFullFledgedPracticeText = page.locator('//h2[text()="Full-Fledged practice website for Automation Engineers"]');
        this.scrollUp = page.locator('//a[@id="scrollUp"]');
    }

    async clickOnSignUpLoginLink() {
        await this.signup.click();

    }

    async verifyLoggedInUser(name) {
        const xpath = `//li//a[contains(text(),'Logged in as')]//b[text()="${name}"]`
        return await this.page.locator(xpath).isVisible();

    }

    async clickOnDeleteAcctLink() {
        await this.deleteAccount.click();

    }

    async clickOnProductsLink() {
        await this.products.click();

    }

    async isProductVisible() {
        return await this.products.isVisible();

    }

    async scrollToViewSpecificElement(text) {
        const xpath = `//h2[text()="${text}"]`;
        const ele = await this.page.locator(xpath).nth(0);
        await ele.evaluate(e => e.scrollIntoView({ block: 'center', behavior: 'smooth' }));
    }

    async isTextVisible(text) {
        const xpath = `//h2[text()="${text}"]`;
        return this.page.locator(xpath).nth(0).isVisible();
    }

    async clickOnScrollUpArrow() {
        await this.scrollUp.click();

    }



}

export default { HomePage }