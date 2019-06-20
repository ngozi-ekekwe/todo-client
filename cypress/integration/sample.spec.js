describe('My Fisrt Test', function () {
  it('constains an element', () => {
    cy.visit('https://todo-api-client.herokuapp.com/')
    cy.contains('login').click()

    cy.pause()

    cy.url()
      .should('include', '/login')

    cy.get('.form-control')
      .type('ngozi@gmail.com')
      .should('have.value', 'ngozi@gmail.com')
    // expect(true).to.equal(true);

    // Arrange - setup initial app state
    // Visit a web page
    // query for an element
    // interact with the element

    // Act -  take an action
    // Assert - make an assertion
  })
})