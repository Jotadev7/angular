
describe('Contador', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Título correto', () => {
    cy.title().should('equal', 'UnitTests');
  });

  it('Teste de incremento', () => {
    cy.get('.resultado').should('have.text', '0');
    cy.get('[data-cy=incrementa]').click();
    cy.get('.resultado').should('have.text', '1');
  });

  it('Teste de decremento', () => {
    cy.get('[data-cy=incrementa]').click();
    cy.get('.resultado').should('have.text', '1');
    cy.get('[data-cy=decrementa]').click();
    cy.get('.resultado').should('have.text', '0');
  });

  it('Não deve decrementar abaixo de 0', () => {
    cy.get('[data-cy=incrementa]').click();
    cy.get('.resultado').should('have.text', '1');
    cy.get('[data-cy=decrementa]').click();
    cy.get('.resultado').should('have.text', '0');
  });

  it('Não deve incrementar acima de 100', () => {
    for(let i = 0; i < 100; i++) {
      cy.get('[data-cy=incrementa]').click();
    }
    cy.get('.resultado').should('have.text', '100');
  });
});
