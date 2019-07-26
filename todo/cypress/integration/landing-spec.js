describe('Landing Page', () => {
    it('should render properly', () => {
        cy
            .visit('/')
            .get('h1[data-testid="top-nav-title"]')
            .contains("Todo's")
    })

    it('should have current copyright date', () => {
        const now = new Date()

        cy
            .visit('/')
            .get('div[data-testid="copyright"]')
            .contains(now.getFullYear())
    })

    it('should have company name', () => {
        cy
            .visit('/')
            .get('div[data-testid="company-name"]')
            .contains('Brooks Patton')
    })
})