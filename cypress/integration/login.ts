import { LoginPage } from '../pages/login_page'

before(function(){
    cy.log('I am outside all describe blocks')
})

describe('All login tests', function () {

    let loginPage = new LoginPage()

    beforeEach(function(){
        loginPage.navigate('https://trytestingthis.netlify.app/')
    })

    it.only('login test - valid credentials', () => {

        //creating the object of LoginPage
    
        loginPage.loginWithValidCredentials('test', 'test')

    })

    it('login test - Invalid credentials', () => {

        loginPage.loginWithInvalidCredentials('abc', '123')

        // loginPage.enterUsername('test')
        // loginPage.enterPassword('test')
        // loginPage.clickLogin()


        // cy.visit('https://trytestingthis.netlify.app/')
        // cy.get('#uname').type('test')
        // cy.get('#pwd').type('test')
        // cy.get('[type="submit"]').click()
        // cy.contains('Login Successful')

    })
})
