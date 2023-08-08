it('Iniciar sesión exitosamente', () => {
  cy.visit('http://localhost:3000/login');
  cy.get('[id="email"]').type('cernajose79@gmail.com');
  cy.get('[id="password"]').type('qwerty123');
  cy.contains('Login', { timeout: 10000 }).click();
  cy.log('Login Correcto');
});

