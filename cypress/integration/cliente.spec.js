/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Ao acessar a home, deve conter uma lista com 10 clientes', () => {
    // Verifica se tabela contém 10 itens.
    cy.get('tbody tr').should('to.have.length', 10)

    // Veifica se contém Luan 2.
    cy.get('tbody tr').contains('Luan 2')

    // Veifica se o título tem Express.
    cy.get('h1').contains('Express')
  })
})