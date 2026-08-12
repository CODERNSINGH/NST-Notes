describe('To do', () => {
  it('Visits the URL', () => {
    cy.visit('http://localhost:5173/dashboard')
  })

  it("Able to Type the input",() => {
    cy.visit('http://localhost:5173')
    cy.get('input').type('Hello, Cypress!')
    cy.get('button').contains('Add').click();
  })
})