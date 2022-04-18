describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/testes')
    cy.contains('unit-tests app is running!')
    cy.contains('Add')
  })
})
