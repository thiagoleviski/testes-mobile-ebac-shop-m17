class LoginScreen {

    get #loginStore() {
        return $('id:button_login_store')
    }

    get #storeAddress() {
        return $('android.widget.EditText')
    }

    get #continue() {
        // return $('id:bottom_button')
        return $('android=new UiSelector().text("Continue")')
    }

    get #continueWithStoreCredentials() {
        return $('id:login_site_creds')
    }

    get #username(){
        return $('android=new UiSelector().text("Username")')
    }

    get #password(){
        return $('android=new UiSelector().text("Password")')
    }

    get #twoFactorPasswordButton(){
        return $('id:login_enter_password')
    }

    async loginStore() {
        this.#loginStore.click()
    }

    async setStoreAddress(url) {
        this.#storeAddress.setValue(url)
    }

    async next(){
        await this.#continue.waitForDisplayed({ timeout: 10000 }),
        await this.#continue.click()
    }

    async continueWithStoreCredentials(){
        await this.#continueWithStoreCredentials.waitForDisplayed({ timeout: 10000 }),
        await this.#continueWithStoreCredentials.click()
    }

    async login(username, password){
        await this.#username.setValue(username),
        await this.#password.setValue(password),
        await this.#continue.waitForDisplayed({ timeout: 10000 }),
        await this.#continue.click()
    }

    async goToTwoFactorAuth(){
        await this.#twoFactorPasswordButton.waitForDisplayed({ timeout: 10000 }),
        await this.#twoFactorPasswordButton.click()
    }

    async twoFactorLogin(password){
        await this.#password.setValue(password),
        await this.#continue.waitForDisplayed({ timeout: 10000 }),
        await this.#continue.click()
    }
}

module.exports = new LoginScreen()