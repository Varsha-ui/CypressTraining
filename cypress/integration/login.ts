///<reference types="cypress"/>

import { LoginPage } from '../pages/login_page'

before(function(){
    cy.log('I am outside all describe blocks')
})

describe('All login tests', function () {

    //creating the object of LoginPage
    let loginPage = new LoginPage()

    beforeEach(function(){
        loginPage.navigate('https://trytestingthis.netlify.app/')
    })

    it('login test - valid credentials', () => {
    
        loginPage.loginWithValidCredentials('test', 'test')

    })

    it('login test - Invalid credentials', () => {

        loginPage.loginWithInvalidCredentials('abc', '123')

    })

    it('login test - valid custom commands', () => {

        loginPage.loginWithValidCustomCommands('test', 'test')

    })
})
