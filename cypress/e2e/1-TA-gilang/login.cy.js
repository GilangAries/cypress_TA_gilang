describe('example to-do app', () => {
    beforeEach(() => {
      
      cy.visit('/')
      
    })
it('displays the main page', () => {
    cy.get('.text-lg > img').should('exist');
    })
it('login with valid account', () => {
    //Ini harus dibawa terus ke setiap case, karena jika tidak login maka tidak bisa download

    cy.get('.pr-2').should('be.visible').click();
    cy.get('#email').should('be.visible').type('cobacoba4@gmail.com');
    cy.get('#password').should('be.visible').type('cobacoba123');
    cy.get(':nth-child(8) > .btn').should('be.visible').wait(2000).click();
    cy.get('.btn > .text-black').contains('cobatestTA');
    })

it('setting and choosing icon', () => {
// ICON STYLE
//Line
    cy.get(':nth-child(2) > .mb-1 > .change-style > .flex > svg')
    .click()
    .should('have.value', 'Line');
// //Glyph
//     cy.get(':nth-child(3) > .mb-1 > .change-style > .ml-3')
//     .should('be.visible').click();
// //Line color
//     cy.get(':nth-child(4) > .mb-1 > .change-style > .ml-3')
//     .should('be.visible').click();
// //Flat color
//     cy.get(':nth-child(5) > .mb-1 > .change-style > .ml-3')
//     .should('be.visible').click();
// //Flat line
//     cy.get(':nth-child(6) > .mb-1 > .change-style > .ml-3')
//     .should('be.visible').click();
// //Multi color
//     cy.get(':nth-child(7) > .mb-1 > .change-style > .ml-3')
//     .should('be.visible').click();

// // SIZE (PX)    
// //16
//     cy.get(':nth-child(1) > .flex-wrap > :nth-child(1) > .text-xs')
//     .should('be.visible')
//     .click().contains('16');
// //24
//     cy.get(':nth-child(1) > .flex-wrap > :nth-child(2) > .text-xs')
//     .should('be.visible').click();
// //32
//     cy.get(':nth-child(1) > .flex-wrap > :nth-child(3) > .text-xs')
//     .should('be.visible').click();
// //48
//     cy.get(':nth-child(1) > .flex-wrap > :nth-child(4) > .text-xs')
//     .should('be.visible').click();
// //64
//     cy.get(':nth-child(1) > .flex-wrap > :nth-child(5) > .text-xs')
//     .should('be.visible').click();
// //96
//     cy.get(':nth-child(1) > .flex-wrap > :nth-child(6) > .text-xs')
//     .should('be.visible').click();

// // STROKE (PX)
// //0.5
//     cy.get('.styler > :nth-child(2) > .flex-wrap > :nth-child(1) > .text-xs')
//     .should('be.visible').click();
// //1
//     cy.get('.styler > :nth-child(2) > .flex-wrap > :nth-child(2) > .text-xs')
//     .should('be.visible').click();
// //1.5
//     cy.get('.styler > :nth-child(2) > .flex-wrap > :nth-child(3) > .text-xs').should('be.visible').click();
// //2
//     cy.get(':nth-child(2) > .flex-wrap > :nth-child(4) > .text-xs').should('be.visible').click();
// //2.5
//     cy.get(':nth-child(2) > .flex-wrap > :nth-child(5) > .text-xs').should('be.visible').click();
// //3
//     cy.get(':nth-child(2) > .flex-wrap > :nth-child(6) > .text-xs').should('be.visible').click();

})
})