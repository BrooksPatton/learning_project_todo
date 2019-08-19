describe('login', () => {
    let email;
    let username;
    let password;

    before('create account', () => {
            email = `testemail${Date.now()}@testing.com`
            username = `testusername${Date.now()}`
            password = 'meow meow 1234!'
    
            cy
                .visit('/accounts')
                .get('#email')
                .type(email)
                .get('#username')
                .type(username)
                .get('#password')
                .type(password)
                .get('#password-confirmation')
                .type(password)
                .get('button')
                .click()
                .url()
                .should('include', 'dashboard')
    })

    before('log out', () => {
        cy.request('/accounts/logout')
    })

    it('should log in an account', () => {
        cy
            .visit('/accounts/login')
            .get('#email')
            .type(email)
            .get('#password')
            .type(password)
            .get('button')
            .click()
            .url()
            .should('include', 'dashboard')
    })
})