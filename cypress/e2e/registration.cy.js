describe('Регистрация', () => {
    it('Успешная регистрация нового пользователя', () => {
      cy.visit('https://dev.profteam.su/registration');
      
      const uniqueNumber = Date.now();
      const login = `user_${uniqueNumber}`;
      const email = `${login}@test.ru`;
      const password = 'Password1!';
      
      cy.get('input[name="login"]').type(login);
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').type(password);
      cy.get('input[name="password_confirmation"]').type(password);
      
      cy.get('button[type="submit"]').click();
      
      cy.url().should('include', '/login');
    });
  });