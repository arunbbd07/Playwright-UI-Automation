const {test, expect}= require('playwright/test');


test('testing for interview',async({page})=>{

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
    await page.locator('//*[@id="widget-navbar-217834"]/ul/li[3]/a').click();
    await page.locator('//a[@class="text-ellipsis-2"]').first().click();
    await page.locator('//input[@id="input-name"]').fill("test-Arun");
    await page.locator('//input[@id="input-email"]').fill("testarun@gmail.com");
    await page.locator('//textarea[@id="input-comment"]').fill("assasaassssssssssssssssssssssssssssssssasssssssssssssdfsdfsdfssffsdsfsdffdsfdsf");
    await page.locator('//button[@id="button-comment"]').click();
    const actualSuccessMessage= await page.locator('//div[@class="alert alert-success alert-dismissible"]').textContent();
    expect(actualSuccessMessage,"Thank you for your comment. It has been submitted to the webmaster for approval.")

    //textarea[@id="input-comment"]
    //input[@id="input-name"]
    //input[@id="input-email"]
    //button[@id="button-comment"]



});