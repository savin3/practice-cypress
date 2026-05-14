import RandHelper from "../../modules/helpers.js";

describe('Модуль Заявки', () => {
  it('Подача заявки на роль работодателя (новый пользователь)', () => {
    cy.visit('http://dev.profteam.su/registration');
    cy.wait(500);

    let randomizedUsername = RandHelper.randomCharacters(30) + "user" + RandHelper.randomCharacters(5);
    cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(randomizedUsername);
    
    let randomizedEmail = randomizedUsername + "email@example.com";
    cy.get('.form-input--email', { timeout: 4000 }).type(randomizedEmail);
    
    let randomizedPassword = "Password1!";
    cy.get(':nth-child(3) > .form-control--medium > .form-input--password', { timeout: 4000 }).type(randomizedPassword);
    cy.get(':nth-child(4) > .form-control--medium > .form-input--password', { timeout: 4000 }).type(randomizedPassword);

    cy.get(':nth-child(4) > .button').click();
    cy.wait(400);

    cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type("Иванов Иван Иванович");
    cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type("Иван");
    cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type("Иванов");

    cy.get(':nth-child(3) > .button').click();
    cy.wait(3000);

    cy.get('.page-nav__role-block > .button', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.get('.select-role-form > :nth-child(1)').click({ force: true });
    cy.wait(500);
    cy.get('.variants-company > :nth-child(2)').click();

    cy.get('[placeholder="Название вашей организации"]').type('Моя Тестовая Компания');
    cy.get('[placeholder="Адрес вашей организации"]').type('г. Москва, ул. Тестовая, д. 1');
    cy.get('[placeholder="Описание вашей организации"]').type('Тестовое описание компании');

    cy.get('.create-company-form__description-block > .button').click();
    cy.contains('Заявка отправлена', { timeout: 10000 }).should('be.visible');
  });
});