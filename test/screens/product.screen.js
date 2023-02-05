class Product{
    get #productsIcon(){
        return $('//android.widget.FrameLayout[@content-desc="Products"]/android.widget.FrameLayout/android.widget.ImageView')
    }

    get #addProduct(){
        return $('id:addProductButton')
    }

    get #productTypeSelect(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]')
    }

    get #addPicture(){
        return $('id:addImageContainer')
    }

    get #wordPressPhoto(){
        return $('id:textWPMediaLibrary')
    }

    get #thisIsthePhoto(){
        return $('(//android.widget.ImageView[@content-desc="Image Thumbnail"])[10]')
    }

    get #addPhoto(){
        return $('id:mnu_confirm_selection')
    }

    get #returnPhoto(){
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]')
    }

    // get #continueediting(){
    //     return $('android=new UiSelector().text("KEEP EDITING")')
    // }

    get #productTitle(){
        return $('id:editText')
    }

    get #describingProduct(){
        return $('android=new UiSelector().text("Describe your product")')
    }

    get #productDescription(){
        return $('id:visualEditor')
    }

    get #descriptionReturn(){
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]')
    }

    get #addPrice(){
        return $('android=new UiSelector().text("Add price")')
    }

    get #regularPrice(){
        return $('android=new UiSelector().text("Regular price")')
    }

    get #salePrice(){
        return $('android=new UiSelector().text("Sale price")')
    }

    get #taxStatus(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText')
    }

    get#chooseTaxStatus(){
        return $('android=new UiSelector().text("None")')
    }

    get #taxClass(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.LinearLayout[4]/android.widget.FrameLayout/android.widget.EditText')
    }

    get#chooseTaxClass(){
        return $('android=new UiSelector().text("Zero rate")')
    }

    get #priceReturn(){
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]')
    }

    get #inventory(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.ScrollView/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/androidx.cardview.widget.CardView[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]')
    }

    get #sku(){
        return $('id:edit_text')
    }

    get #stockStatus(){
        return $('id:spinner_edit_text')
    }

    get#selectStockStatus(){
        return $('android=new UiSelector().text("In stock")')
    }

    get #inventoryReturn(){
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]')
    }

    get #publishProduct(){
        return $('android=new UiSelector().text("PUBLISH")')
    }

    get #tip(){
        return $('android=new UiSelector().text("Product Test")')
    }


    async clickProductIcon(){
        await this.#productsIcon.waitForDisplayed({ timeout: 10000 })
        return await this.#productsIcon.click()
    }

    async clickAddProduct(){
        await this.#addProduct.waitForDisplayed({timeout: 10000 })
        return await this.#addProduct.click()
    }

    async clickSimplePhysicalProduct(){
        await this.#productTypeSelect.waitForDisplayed({ timeout: 10000 })
        return await this.#productTypeSelect.click()
    }

    async choosePhoto(){
        await this.#addPicture.click()
        await this.#wordPressPhoto.click()
        await this.#thisIsthePhoto.click()
        await this.#addPhoto.click()
        await this.#returnPhoto.click()
        // await this.#continueediting.click()
    }

    async insertProductName(){
        await this.#productTitle.setValue('Product Test')
    }

    async generalProductDescription(){
        await this.#describingProduct.click()
        await this.#productDescription.setValue('General Description')
        await this.#descriptionReturn.click()
    }

    async addingPriceProcess(){
        await this.#addPrice.click()
        await this.#regularPrice.setValue('20')
        await this.#salePrice.setValue('15')
        await this.#taxStatus.click()
        await this.#chooseTaxStatus.click()
        await this.#taxClass.click()
        await this.#chooseTaxClass.click()
        await this.#priceReturn.click()
        // await this.#continueediting.click()

    }

    async addInventory(){
        await this.#inventory.click()
        await this.#sku.setValue(`test ${Math.floor(Math.random()* 500)}`)
        await this.#stockStatus.click()
        await this.#selectStockStatus.click()
        await this.#inventoryReturn.click()
    }

    async publish(){
        await this.#publishProduct.click()
    }
    
    async displayedTip(){
        await this.#tip.waitForDisplayed({ timeout: 30000 }),
        await this.#tip.waitForExist()
        return await this.#tip.isDisplayed()
    }

}
module.exports = new Product()