describe('Модуль Личный кабинет', () => {
    const LOGIN_URL = 'http://dev.profteam.su/login';
  
    beforeEach(() => {
      cy.visit(LOGIN_URL);
    });
  
    it('Просмотр уведомлений', () => {
      cy.get('[autocomplete="username"]').type('testSavin');
      cy.get('[autocomplete="current-password"]').type('Password1');
      cy.get('form').contains('button', 'Войти').should('not.be.disabled').click();
      cy.wait(2000);
  
      cy.get('.header-container__desktop').click();
      
      cy.get('.notification-bell__similar').should('be.visible');
    });
  
    it('Прочтение уведомлений пользователя', () => {
      cy.get('[autocomplete="username"]').type('testsavini');
      cy.get('[autocomplete="current-password"]').type('Password1');
      cy.get('form').contains('button', 'Войти').should('not.be.disabled').click();
      cy.wait(2000);
  
      cy.get('.header-container__desktop').click();
  
      cy.get('.header-container__desktop .notification-bell__similar')
        .contains('.link--size-small', 'Прочитать все')
        .should('be.visible')
        .click();
      
      cy.wait(1000);
    });
  });