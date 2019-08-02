describe('create account', () => {
    it('should create an account', () => {
        const email = `testemail${Date.now()}@testing.com`
        const username = 'test user'
        const password = 'meow meow 1234!'

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

    it('should fail to create an account when not sending any data', () => {
        cy
            .visit('/accounts')
            .get('button')
            .click()
            .url()
            .should('include', 'accounts')
    })

    it('should fail to create an account if the passwords do not match', () => {
        const email = `testemail${Date.now()}@testing.com`
        const username = 'test user'
        const password = 'meow meow 1234!'
        const otherPassword = 'not the same password!'

        cy
            .visit('/accounts')
            .get('#email')
            .type(email)
            .get('#username')
            .type(username)
            .get('#password')
            .type(password)
            .get('#password-confirmation')
            .type(otherPassword)
            .get('button')
            .click()
            .get('div[data-testid="password"]')
            .should('contain', 'The password confirmation does not match.')
    })
})