describe('Авторизация', () => {
    it('Успешный вход с валидными данными', () => {
      cy.visit('http://dev.profteam.su/login');
      cy.wait(500);
  
      cy.get('.form__buttons > :nth-child(3) > button').should('be.disabled', true);
  
      cy.get('.form-input--text').type('testerStudent');
      cy.get('.form-input--password').type('Password1');
  
      cy.get('.form__buttons > :nth-child(3) > button').click();
      
      cy.url().should('not.include', '/login');
    });
  
    it('Ошибка при неверном логине или пароле', () => {
      cy.visit('http://dev.profteam.su/login');
      cy.wait(500);
  
      cy.get('.form-input--text').type('wrongUser');
      cy.get('.form-input--password').type('wrongPass');
      cy.get('.form__buttons > :nth-child(3) > button').click();
  
      cy.contains('.form-error > span', 'Неверный логин или пароль, попробуйте заново.').should('exist');
    });
  });