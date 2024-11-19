const { test, expect } = require('@playwright/test');

test.use({
  storageState: 'state.json', // Using pre-saved login session
});

test('to handle browser permissions', async ({ browser }) => {
  const context = await browser.newContext({
    geolocation: { latitude: 48.8584, longitude: 2.2945 },  // Set a location (Paris, France)
    permissions: ['geolocation', 'camera', 'microphone', 'notifications'],  
  });
  const page = await context.newPage();
  await page.goto('https://maps.example.com');
});

test('mock network request', async ({ page }) => {
  // Intercept the network request to the specific URL
  test.setTimeout(120000);
  await page.route('https://automationexercise.com/api/productsList', async route => {
    // Mock the response
    const jsonResponse = {
      products: [
        {
          id: 1, name: "Mocked Product 1", price: "Rs. 500", brand: "Test", category: { usertype: { usertype: "Women" }, category: "Tops" }
        }
      ]
    };
    await route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(jsonResponse)
    });
  });

  await page.goto('https://automationexercise.com', { timeout: 60 * 1000, waitUntil: "domcontentloaded" });

  // Perform actions and assertions
  await page.click('text=Products');
  page.goto("https://automationexercise.com/api/productsList", { timeout: 30 * 1000 });
  const productText = await page.textContent('text=Mocked Product 1');
  console.log('Mocked Data:', productText);
  page.waitForSelector('text=Mocked Product 1');
  await expect(page.locator('text=Mocked Product 1')).toBeVisible();
});

test('measure performance metrics of a webpage, such as loading time',async({page})=>{

});

