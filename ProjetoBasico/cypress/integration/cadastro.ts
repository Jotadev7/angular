describe('Teste de cadastro', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('Sucesso ao cadastrar', () => {
    cy.contains('Desenvolvimento Avançado em Angular');
    cy.contains('Cadastro').click();
    cy.contains('Demo Cadastro');
    cy.get('#nome').type('João');
    cy.get('#cpf').type('006.609.743-63');
    cy.get('#email').type('joao@email.com');
    cy.get('#senha').type('asd1234');
    cy.get('#senhaConfirmacao').type('asd1234');
    cy.get('#Registrar').click();
    cy.get('#resultado').should('contain', '"nome":"João"')
  })

  it('Falha ao cadastrar', () => {
    cy.contains('Desenvolvimento Avançado em Angular');
    cy.contains('Cadastro').click();
    cy.contains('Demo Cadastro');
    cy.get('#nome').type('João');
    cy.get('#cpf').type('006.609.743-63');
    cy.get('#email').type('joao@email.com');
    cy.get('#senha').type('asd1234');
    cy.get('#Registrar').click();
    cy.get('#resultado').should('contain', 'Não submeteu!')
  })

  it('Preenchimento de campo obrigatório', () => {
    cy.contains('Desenvolvimento Avançado em Angular');
    cy.contains('Cadastro').click();
    cy.contains('Demo Cadastro');
    cy.get('#nome').type('João');
    cy.get('#nome').clear();
    cy.get('#alertaNome').should('have.text', 'Preencha o campo nome')
  })
})
