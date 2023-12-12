Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

Cypress._.times(Cypress.env('times'), () => {
    describe('Opaponline /abtest visit & button click', () => {
        it('Check if "Opaponline" exists in page', () => {
            
            cy.visit(Cypress.env('host'), {
                auth: {
                    username: Cypress.env('user'),
                    password: Cypress.env('pass')
                }
            });

            const selector = (typeof Cypress.env('selector') === 'string') ? Cypress.env('selector').trim() : false;
            
            if (selector) {
                cy.get(selector).click();
            }

            cy.contains(Cypress.env('needle'));

        });
    });
});
