describe('Form Tests', () => {
    it('should enter a name in the Name input', () => {
        cy.get('input[name="name"]').type('John Doe');
    });

    it('should assert that the entered name is correct', () => {
        cy.get('input[name="name"]'),should('have.value', 'John Doe');
    });

    it('should enter an email address', () => {
        cy.get('input[name="email"]').type('johnDoe@yahoo.com');
    });

    it('should enter a password', () => {
        cy.get('input[name="password"]').type('John1234');
    });

    it('should check the terms of service box', () => {
        cy.get('input[name="terms"]').check();
    });

    it('should submit the form data', () => {
        cy.get('button[type="submit"]').click();
    });

    it('should check for form validation if an input is left empty', () => {
        cy.get('input[name="name"]').clear();
        cy.get('button[type="submit"]').click();
        cy.contains('Please enter your name').should('be.visible');
    });
});