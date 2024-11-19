
class AcccountDeletionPage {

    constructor(page) {
        this.page = page;
        this.deleteAccount = page.locator('//a[@href="/delete_account"]');
        this.accountDeletedText = page.locator('//h2[@data-qa="account-deleted"]');
        this.deleteAccounContBtn = page.locator('//a[@data-qa="continue-button"]');
    }

    async isAccountDeletedTextVisible() {
        return await this.accountDeletedText.isVisible();
    }

    async clickOnAccountDeletionContinueLink() {
        await this.deleteAccounContBtn.click();
    }



}

module.exports = { AcccountDeletionPage }