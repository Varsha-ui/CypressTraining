
describe('read Write file demo', function(){

    beforeEach(function(){
        cy.fixture('example.json').as('data')
    })

    it('read file using fixture', function(){

        cy.fixture('example.json')
        .its('name').should('eq', 'cypress')

        //want to access file data
        cy.log(this.data.name)
        cy.log(this.data.email)
    })


    it('Read file using ReadFile cmd', function(){
        cy.readFile('./cypress/fixtures/example.json')
        .its('name').should('eq', 'cypress')
    })

    it('Write file demo', function(){
        cy.writeFile('sample.txt', 'Hello i am learning cypress')
        cy.writeFile('sample.txt', '\nThis is interesting', {flag: 'a+'})
    })
})

