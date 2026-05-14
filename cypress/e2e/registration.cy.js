import RandHelper from "../../modules/helpers.js";

describe('Регистрация', () => {
  it('Успешная регистрация нового пользователя', () => {
    cy.visit('http://dev.profteam.su/registration');
    cy.wait(500);

    let randomizedUsername = RandHelper.randomCharacters(30) + "user" + RandHelper.randomCharacters(5);
    cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(randomizedUsername);
    cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').should('have.value', randomizedUsername);

    let randomizedEmail = randomizedUsername + "email@example.com";
    cy.get('.form-input--email', { timeout: 4000 }).type(randomizedEmail);
    cy.get('.form-input--email').should('have.value', randomizedEmail);

    let randomizedPassword = "Password1!";
    cy.get(':nth-child(3) > .form-control--medium > .form-input--password', { timeout: 4000 }).type(randomizedPassword);
    cy.get(':nth-child(3) > .form-control--medium > .form-input--password').should('have.value', randomizedPassword);

    cy.get(':nth-child(4) > .form-control--medium > .form-input--password', { timeout: 4000 }).type(randomizedPassword);
    cy.get(':nth-child(4) > .form-control--medium > .form-input--password').should('have.value', randomizedPassword);

    cy.get(':nth-child(4) > .button').click();
    cy.wait(400);

    cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type("Иванов Иван Иванович");
    cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type("Иван");
    cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type("Иванов");

    cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').should('have.value', "Иванов Иван Иванович");
    cy.get(':nth-child(2) > .form-control--medium > .form-input--text').should('have.value', "Иван");
    cy.get(':nth-child(3) > .form-control--medium > .form-input--text').should('have.value', "Иванов");
    cy.get(':nth-child(3) > .button').click();
  });
});