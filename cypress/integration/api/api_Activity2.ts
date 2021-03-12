///<reference types="cypress"/>

import { ResponseData } from '../api/TestData'

describe('API to parse the response', ()=>{

    let data = new ResponseData()
    it('GET response from TestData', () => {

        cy.request('GET')
        .then((response) => {
            expect(response.status).to.equal(data.getStatus());
            expect(response.body.page).to.equal(2);
            expect(response.body.data).to.have.length(data.getLength());
            expect(response.body.data[0].email).to.equal(data.getEmail());
            
        })
    })


})

