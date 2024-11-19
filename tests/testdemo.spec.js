
const{test,expect} = require('@playwright/test');


test('test 1',async({page})=>{
await page.goto('https://practice.expandtesting.com/webpark');
await page.selectOption('//select[@name="parkingLot"]', { value: 'Economy' });
//await page.selectOption('//select[@name="parkingLot"]', { label: 'Economy Parking' });
await page.locator('//input[@name="entryTime"]').fill("19:30");
await page.locator('//input[@name="exitDate"]').fill("2024-11-08");
await page.locator('//button[@data-testid="calculate-cost"]').click();
const price= await page.locator('//b[@id="resultValue"]').textContent();
console.log("Price before booking started", price);
let finalPrice = parseFloat(price.replace(/[^\d.]/g, ''));
console.log("price in doller",finalPrice*2);  
await expect(page.locator('//a[@id="reserveOnline"]')).toBeVisible();
await page.locator('//a[@id="reserveOnline"]').click();


});