const{test,expect} = require ('@playwright/test')

test("mocks a fruit and doesn't call api", async ({ page }) => {
  // Mock the api call before navigating
  await page.route('https://demo.playwright.dev/api-mocking/api/v1/fruits', async route => {
    const json = [{ name: 'Mocked_Fruit_Name', id: 21 }];
    await route.fulfill({ json });
  });
  await page.goto('https://demo.playwright.dev/api-mocking');
  await expect(page.getByText('Mocked_Fruit_Name')).toBeVisible();
  console.log(await page.getByText('Mocked_Fruit_Name').textContent());
});

test('To handle multiple browser tabs', async({page})=>{
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),  // Wait for the new tab to open
    page.click('a#newTabLink'),  // Action that triggers the new tab
  ]);
  
  await newPage.goto('https://example.com');
  const newPageTitle = await newPage.title();
  console.log('New tab title:', newPageTitle);  
});
