const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/homePage').default;
const { LoginAndSignUpPage } = require('../pages/loginAndSignUpPage');
const { AccountCreationPage } = require('../pages/accountCreationPage');
const { AcccountDeletionPage } = require('../pages/acccountDeletionPage');
const  ProductsPage  = require('../pages/productsPage');

const testData = JSON.parse(JSON.stringify(require('../testData.json'))); // Read test data from external JSON file

test.describe.configure({ retries: 1 }); // Local retry setting for this block

test('Test Case 1: Register User @smoke', async ({ page }) => {
    await page.goto(testData.baseUrl);
    const homePage = new HomePage(page)
    await homePage.clickOnSignUpLoginLink();
    const loginAndSignUpPage = new LoginAndSignUpPage(page);
    expect(await loginAndSignUpPage.isSignupVisible()).toBeTruthy();
    await loginAndSignUpPage.signUpFormFilling(testData.name);
    const createAccount = new AccountCreationPage(page);
    await createAccount.createAccount(testData.password, testData.dateOfBirth, testData.firstName, testData.lastName, testData.company, testData.address, testData.address2, testData.state, testData.city, testData.zipcode, testData.mobile);
    expect(await createAccount.isAccountCreatedTextVisible()).toBeTruthy();
    await createAccount.clickOnAccountCreatedContinueLink();
    expect(await homePage.verifyLoggedInUser(testData.name)).toBeTruthy();
    await homePage.clickOnDeleteAcctLink();
    const accountDeletedPage = new AcccountDeletionPage(page);
    expect(await accountDeletedPage.isAccountDeletedTextVisible()).toBeTruthy();
    await accountDeletedPage.clickOnAccountDeletionContinueLink();
    expect(await accountDeletedPage.isAccountDeletedTextVisible()).toBeFalsy();

});

test('Test Case 2: Login User with correct email and password', async ({ page }) => {
    await page.goto(testData.baseUrl);
    const homePage = new HomePage(page)
    await homePage.clickOnSignUpLoginLink();
    const loginAndSignUpPage = new LoginAndSignUpPage(page);
    expect(await loginAndSignUpPage.isSignupVisible()).toBeTruthy();
    await loginAndSignUpPage.login(testData.registeredEmail, testData.password);
    expect(await homePage.verifyLoggedInUser(testData.registeredName)).toBeTruthy();

});

test('Test Case 9: Search Product', async ({ page }) => {
    await page.goto(testData.baseUrl);
    const homePage = new HomePage(page)
    await homePage.clickOnProductsLink();
    const productsPage = new ProductsPage(page);
    const searchedProduct = await productsPage.getSearchedProduct(testData.product);
    expect((searchedProduct)).toBe(testData.product);
});

test('Test Case 25: Verify Scroll Up using "Arrow" button and Scroll Down functionality', async ({ page }) => {
    await page.goto(testData.baseUrl);
    const homePage = new HomePage(page);
    const subscriptionText = "Subscription";
    expect(await homePage.isProductVisible()).toBeTruthy();
    homePage.scrollToViewSpecificElement(subscriptionText);
    expect(await homePage.isTextVisible(subscriptionText)).toBeTruthy();
    await homePage.clickOnScrollUpArrow();
    await homePage.scrollToViewSpecificElement(testData.FullFledgedTextOnHomePage);
    expect(await homePage.isTextVisible(testData.FullFledgedTextOnHomePage)).toBeTruthy();

});



