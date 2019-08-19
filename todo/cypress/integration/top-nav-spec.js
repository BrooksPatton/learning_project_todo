describe('top-nav should link properly', () => {
    describe('when logged out', () => {
        it('should link properly when logged out', () => {
            cy
                .visit('/')
                .get('a[data-testid="create-account"]')
                .click()
                .url()
                .should('include', '/accounts')
                .get('h1[data-testid="top-nav-title"]')
                .contains("Todo's")
                .click()
                .url()
                .should('not.include', '/accounts')
                .get('a[data-testid="login"]')
                .click()
                .url()
                .should('include', '/accounts/login')
        })

    })

    describe('when logged in', () => {
        before('log in', () => {
            cy
                .visit('/accounts/login')
                .get('#email')
                .type('a@b.com')
                .get('#password')
                .type('1234qwfp')
                .get('button')
                .click()
                .url()
                .should('include', 'dashboard')
        })
    
        it('should link properly when logged in', () => {
            cy
                .visit('/dashboard')
                .get('a[data-testid="logout"]')
                .should('contain', 'Logout')
                .click()
                .url()
                .should('not.include', '/dashboard')
        })

    })
})