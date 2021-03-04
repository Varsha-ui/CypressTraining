// Cypress.config('baseUrl', 'https://reqres.in/api')


describe('All API test', ()=>{
    
    Cypress.config('baseUrl', 'https://reqres.in/api')
    it('GET 1', () => {

        cy.request('GET', '/users?page=2')
        .then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.status).to.equal(200);
            expect(response.body).not.be.null;
            expect(response.body).to.have.property('page', 2);
            expect(response.body.data).to.have.length(6);
        })
    })

})