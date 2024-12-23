import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";



Given(/^I launch the Fundis admin site$/, () => {
    cy.visit('/');
});


Then(/^I should see Fundis admin header "([^"]*)"$/, ($text) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.adminHeader).should("be.visible").should("have.text", $text);
    })
});



When(/^I input sign in with email and password "([^"]*)", and "([^"]*)"$/, (email, password) => {
    cy.adminSignIn(email, password);
});

Then(/^I click on submit button$/, () => {
    cy.SubmitButton();
});


Then(/^I should see an error message "([^"]*)"$/, ($text) => {
    cy.invalidMessage($text);
});



Then(/^I click on phone button$/, () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.phoneButton).check();

    });
});



When(/^I input sign in with number and password "([^"]*)", and "([^"]*)"$/, (phone, password) => {
    cy.SignInDetails(phone, password);
});



Then(/^I should see the dashboard page$/, () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.adminDashboard).should('be.visible').and('have.text', 'Dashboard');

    });
});


Then(/^I should see request taps "([^"]*)", "([^"]*)", and "([^"]*)"$/, ($text1, $text2, $text3) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.requestIcons).should('contain.text', $text1, $text2, $text3);
    })
});



Then(/^I should see request table$/, () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.requestTable).should('exist');
    })
});



When(/^I click on Job Request$/, () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.requestTab).contains('Requests').click();

    })

});



Then(/^I should see header "([^"]*)"$/, ($text) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.header).contains($text);
    })
});

Then(/^I should see be able to Export all data$/, () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.exportTab, {
            timeout: 20000
        }).click({
            force: true
        });
    })
});



Then(/^I shuffle all job request by their titles$/, () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.jobTitle).contains('Job ID').click();
        cy.get(el.jobTitle).contains('Job Title').click();
        cy.get(el.jobTitle).contains('Status').click();
        cy.get(el.jobTitle).contains('Location').click();
        cy.get(el.jobTitle).contains('Description').click();
        cy.get(el.jobTitle).contains('Date Created').click();
        cy.get('div.MuiDataGrid-cell.MuiDataGrid-cell--textLeft').should('exist');
    })
});


When(/^I click on any Job request$/, () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.selectEachRequest, {timeout: 50000 }).click({force: true})
    })
});

Then(/^I should see details pop up$/, () => {
    cy.get('div.MuiBox-root.css-a7up1d   ', { timeout: 20000 }).should('be.visible');
    cy.get('.MuiDataGrid-cellContent').should('be.visible').and('have.text', 'FUN/JOB/IND/00000390');
    cy.get('h6.MuiTypography-root.MuiTypography-h6.css-e1j7e').should('contain.text', 'Status:').find('span.MuiTypography-root.MuiTypography-p.css-al20kp').should('have.text', 'pending');
    cy.get('span.MuiTypography-root.MuiTypography-p.css-89n4po').within(() => {
        cy.contains('Customer:').should('contain.text', 'Customer Tester');
        cy.contains('Artisan:').should('contain.text', 'Artisan not available');
        cy.contains('Description:').should('contain.text', 'I want to fix my kitchen cabinet');
        cy.contains('Schedule:').should('contain.text', 'Aug 30, 2024');
        cy.contains('Service type:').should('contain.text', 'individual');
        cy.contains('Address:').should('contain.text', 'Nairobi');
    });
});