
/// <reference types="cypress-downloadfile"/> 

// it('File upload', function(){


//     cy.visit('https://tinyupload.com/')
//     cy.get('#fileField').attachFile('Input_password')


// })


it('File download demo', function(){

    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})