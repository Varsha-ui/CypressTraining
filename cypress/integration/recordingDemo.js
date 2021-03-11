describe('Recorded tests', function(){
    it('My first recorded test', function(){


    })

    /* === Test Created with Cypress Studio === */
    it('My recorded test', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://trytestingthis.netlify.app/');
        cy.get('#fname').type('test');
        cy.get('#lname').type('test');
        //cy.get('.main').click();
        cy.get('[type="submit"]').click();
        /* ==== End Cypress Studio ==== */
    });
})