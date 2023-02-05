const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");
const product = require("../screens/product.screen");

let url = 'http://lojaebac.ebaconline.art.br/';
let usuario = 'gerente';
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'


describe('Access admin painel', () => {
    it('should login with valid credentials and register a product', async () => {
        await homeScreen.goToLogin(),
        await loginScreen.loginStore(),
        await loginScreen.setStoreAddress(url),
        await loginScreen.next(),
        await loginScreen.continueWithStoreCredentials(),
        await loginScreen.login(usuario,senha),
        await loginScreen.goToTwoFactorAuth(),
        await loginScreen.twoFactorLogin(senha)

        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')

        await product.clickProductIcon(),
        await product.clickAddProduct(),
        await product.clickSimplePhysicalProduct(),
        await product.choosePhoto(),
        await product.insertProductName(),
        await product.generalProductDescription(),
        await product.addingPriceProcess(),
        await product.addInventory(),
        await product.publish()

        expect(await product.displayedTip()).toBeTruthy()
    });
});