class HomeScreen {
    get #skip(){
        return $('id:button_skip')
    }

    async goToLogin(){
        this.#skip.click()

    }
}
module.exports = new HomeScreen()