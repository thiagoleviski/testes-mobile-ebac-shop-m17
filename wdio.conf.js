// import {join} from "path";
const allure = require('allure-commandline');
const video = require('wdio-video-reporter');

exports.config = {
    // hostname: 'localhost',
    // port: 4723,
    // path: '/wd/hub',
    user: process.env.BROWSERSTACK_USERNAME || 'thiagoleviski_RKLsnv',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'vsPNxYzdUT5oEP18smMq',
    // services: ["appium"],
    services:['browserstack'],
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{

        // Rodando Local
        // "platformName": "Android",
        // "platformVersion": "11.0",
        // "deviceName": "Thiago-EBAC",
        // "automationName": "UiAutomator2",
        // "app": "C:/Projetos/testes-mobile-ebac-shop/app/android/loja-ebac.apk",
        // "appPackage": "com.woocommerce.android",
        // "appActivity": ".ui.main.MainActivity",
        // "appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity",

        //Rodando Device Farm
            project: "Meu primeiro projeto em Device Farm",
            build: "1",
            name: "teste_login",
            device: "Samsung Galaxy S8",
            os_version: "7.0",
            app: process.env.BROWSERSTACK_APP_ID || 'bs://65ea01dde7d47fa5eafc2ee84a04cd81f8325210',
            'browserstack.local': false
    }],
    waitForTimeout: 200000,
    mochaOpts: {
        timeout: 300000
    },
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
        [video, {
            saveAllVideos: false,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
        }],
    ],
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                60000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        await driver.takeScreenshot()
    }
}