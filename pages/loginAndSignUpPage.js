// @ts-check

class LoginAndSignUpPage {

    constructor(page) {
        this.page = page;
        this.signupName = page.locator('//input[@data-qa="signup-name"]');
        this.signupEmail = page.locator('//input[@data-qa="signup-email"]');
        this.signupButton = page.locator('//button[@data-qa="signup-button"]');
        this.loginText = page.locator('//h2[contains(text(),"New User Signup!")]');
        this.loginEmail = page.locator('//input[@data-qa="login-email"]');
        this.loginPassword = page.locator('//input[@data-qa="login-password"]');
        this.loginButton = page.locator('//button[@data-qa="login-button"]');

    }

    async isSignupVisible() {
        return await this.loginText.isVisible();
    }

    async signUpFormFilling(name) {
        await this.signupName.fill(name);
        const currentDate = new Date()
        let timestamp = currentDate.getTime();
        await this.signupEmail.fill(`testing_${timestamp}@gmail.com`);
        await this.signupButton.click();

    }

    async login(email, password) {
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
    }



}

module.exports = { LoginAndSignUpPage };