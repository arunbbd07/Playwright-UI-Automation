
class ProductsPage {

    constructor(page) {
        this.page = page;
        this.seach = page.locator('//input[@id="search_product"]');
        this.products = page.locator("//a[@href='/products']");
        this.searchBtn = page.locator('//button[@id="submit_search"]');
        this.searchedProducts = page.locator('//div[@class="product-image-wrapper"]//span');
        //div[@class="product-image-wrapper"]//span[text()='Men Tshirt']

    }

    async getSearchedProduct(product) {
        await this.seach.fill(product);
        await this.searchBtn.click();
        return await this.searchedProducts.textContent();
    }




}

module.exports = ProductsPage;