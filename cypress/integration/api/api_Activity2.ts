///<reference types="cypress"/>

import { ResponseData } from '../api/TestData'

describe('API to parse the response', ()=>{

    let data = new ResponseData()
    it('GET response from TestData', () => {

        cy.request('GET')
        .then((response) => {
            expect(response.status).to.equal(data.getStatus());
            expect(response.body).to.have.property(data.getProperty());
            expect(response.body.data).to.have.length(data.getLength());
            
        })
    })


})

