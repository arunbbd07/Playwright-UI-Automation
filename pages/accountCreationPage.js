
class AccountCreationPage {

    constructor(page) {
        this.page = page;
        this.accountCreatedText = page.locator('//h2[@data-qa="account-created"]');
        this.continueLink = page.locator('//a[@data-qa="continue-button"]');
        this.male = page.locator('//input[@value="Mr"]');
        this.password = page.locator('//input[@data-qa="password"]');
        this.dobDay = page.locator('//select[@data-qa="days"]');
        this.dobMonth = page.locator('//select[@data-qa="months"]');
        this.dobYear = page.locator('//select[@data-qa="years"]');
        this.newsletter = page.locator('//input[@name="newsletter"]');
        this.specialOffer = page.locator('//input[@name="optin"]');
        this.firstName = page.locator('//input[@data-qa="first_name"]');
        this.lastName = page.locator('//input[@data-qa="last_name"]');
        this.company = page.locator('//input[@data-qa="company"]');
        this.address = page.locator('//input[@data-qa="address"]');
        this.address2 = page.locator('//input[@data-qa="address2"]');
        this.state = page.locator('//input[@data-qa="state"]');
        this.city = page.locator('//input[@data-qa="city"]');
        this.zipcode = page.locator('//input[@data-qa="zipcode"]');
        this.mobile = page.locator('//input[@data-qa="mobile_number"]');
        this.createAccountBtn = page.locator('//button[@data-qa="create-account"]');
        this.createAccounContBtn = page.locator('//a[@data-qa="continue-button"]');
    }

    async createAccount(password, dob, firstName, lastName, company, address, address2, state, city, zipcode, mobile) {
        await this.male.click();
        await this.password.fill(password);
        const [day, month, year] = dob.split('-');
        await this.dobDay.selectOption(day);
        await this.dobMonth.selectOption(month);
        await this.dobYear.selectOption(year);
        await this.newsletter.click();
        await this.specialOffer.click();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.company.fill(company);
        await this.address.fill(address);
        await this.address2.fill(address2);
        await this.state.fill(state);
        await this.city.fill(city);
        await this.zipcode.fill(zipcode);
        await this.mobile.fill(mobile);
        await this.createAccountBtn.click();
    }

    async isAccountCreatedTextVisible() {
        return await this.accountCreatedText.isVisible();
    }

    async clickOnAccountCreatedContinueLink() {
        await this.createAccounContBtn.click();
    }


}

module.exports = { AccountCreationPage };