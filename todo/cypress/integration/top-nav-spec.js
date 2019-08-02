describe('top-nav', () => {
    it('should link properly', () => {
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