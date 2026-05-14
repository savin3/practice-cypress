describe('Модуль Заявки', () => {
    it('Подача заявки на роль работодателя', () => {
      cy.visit('http://dev.profteam.su/login');
      cy.get('[autocomplete="username"]').type('testSavin');
      cy.get('[autocomplete="current-password"]').type('Password1');
      cy.get('form').contains('button', 'Войти').click();
      
      cy.url().should('include', '/account/main');
      cy.wait(3000);
      
      cy.get('.page-nav__role-block > .button', { timeout: 15000 })
        .should('be.visible')
        .click();
      
      cy.get('.select-role-form > :nth-child(1)').click({ force: true });
      cy.wait(500);
      
      cy.get('.variants-company > :nth-child(2)').click();
      
      cy.get('[placeholder="Название вашей организации"]').type('Моя Тестовая Компания');
      cy.get('[placeholder="Адрес вашей организации"]').type('г. Москва, ул. Тестовая, д. 1');
      cy.get('[placeholder="Описание вашей организации"]').type('Тестовое описание компании');
      
      cy.get('.create-company-form__description-block > .button').click();
      
      cy.wait(3000);
      cy.url().should('not.include', '/login');
    });
  
    it('Подача заявки на роль учебного заведения', () => {
      cy.visit('http://dev.profteam.su/login');
      cy.get('[autocomplete="username"]').type('testObrSav');
      cy.get('[autocomplete="current-password"]').type('Password1');
      cy.get('form').contains('button', 'Войти').click();
      
      cy.url().should('include', '/account/main');
      cy.wait(3000);
      
      cy.get('.page-nav__role-block > .button', { timeout: 15000 })
        .should('be.visible')
        .click();
      
      cy.get('.select-role-form > :nth-child(2)').click({ force: true });
      cy.wait(500);
      
      cy.get('.variants-company > :nth-child(2)').click();
      
      cy.get('[placeholder="Название вашей организации"]').type('Тестовый Университет');
      cy.get('[placeholder="Адрес вашей организации"]').type('г. Москва, ул. Университетская, д. 1');
      cy.get('[placeholder="Описание вашей организации"]').type('Описание тестового университета');
      
      cy.get('.create-company-form__description-block > .button').click();
      
      cy.wait(3000);
      cy.url().should('not.include', '/login');
    });
  });