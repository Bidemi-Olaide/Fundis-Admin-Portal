Cypress.Commands.add('SignInDetails', (phone, password) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.phoneField).type(phone)
        cy.get(el.passwordField).type(password);
    })
})

Cypress.Commands.add('SignupButton', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.signUpButton).click();
    })
})


Cypress.Commands.add('SubmitButton', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.submitButton).click();
    })
})

Cypress.Commands.add('adminSignIn', (email, password) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.emailAddressField).type(email)
        cy.get(el.passwordField).type(password);
    })
})

Cypress.Commands.add('invalidMessage', ($text) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.errorMessage).should("be.visible").and("have.text", $text);
    })
});