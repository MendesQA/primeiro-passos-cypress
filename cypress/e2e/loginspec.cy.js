describe('Constel Testes', () => {
  it('Login com sucesso', () => {
    cy.visit('https://constel.builders/pages/authentication/login-v2')
    cy.get("[aria-describedby='login-email']").type('gabriel@audax.com')
    cy.get("[aria-describedby='login-password']").type('1234')
    cy.get('.btn-primary').click()
    cy.location('pathname').should('equal', '/dashboard/estatistica')
    cy.get('.text-white').contains('contentes')
  })
  it('Login sem sucesso', () => {
    cy.visit('https://constel.builders/pages/authentication/login-v2')
    cy.get("[aria-describedby='login-email']").type('gabriel@audax.com')
    cy.get("[aria-describedby='login-password']").type('123')
    cy.get('.auth-login-form > .btn').click()
    cy.get('.alert-body')
    
  })
})