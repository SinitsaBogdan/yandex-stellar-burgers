import ingredients from "../../fixtures/ingredients.json";

describe('проверяем доступность приложения', function() {

    beforeEach(() => {
        window.localStorage.setItem('refreshToken', JSON.stringify('test-refreshToken'));
        cy.setCookie('accessToken', 'test-accessToken');

        cy.intercept('GET', 'api/ingredients', {fixture: 'ingredients.json'})
        cy.intercept('GET', 'api/auth/user', {fixture: 'userResponse.json'})
        cy.intercept('POST', 'api/orders', {fixture: 'orderResponse.json'})
        cy.viewport(1300, 800)

        cy.visit('/')
    });

    afterEach(function () {
        cy.clearLocalStorage();
        cy.clearCookies();
    });

    it('Добавление ингредиента из списка в конструктор.', function() {

        cy.get(`[data-cy="order-sum"]`).as('orderSum')
        cy.get('[data-cy="constructor-ingredients"]').as('constructorIngredients')

        cy.get(`[data-cy="${ingredients.data[0].name}"]`).contains('Добавить').click();
        cy.get('@orderSum').contains('2510').should('exist');
        cy.get('[data-cy="constructor-bun"]').contains(ingredients.data[0].name).should('exist')

        cy.get(`[data-cy="${ingredients.data[1].name}"]`).contains('Добавить').click();
        cy.get('@orderSum').contains('2525').should('exist');
        cy.get('@constructorIngredients').contains(ingredients.data[1].name).should('exist')

        cy.get(`[data-cy="${ingredients.data[2].name}"]`).contains('Добавить').click();
        cy.get('@orderSum').contains('6925').should('exist');
        cy.get('@constructorIngredients').contains(ingredients.data[2].name).should('exist')

        cy.get(`[data-cy="${ingredients.data[3].name}"]`).contains('Добавить').click();
        cy.get('@orderSum').contains('11067').should('exist');
        cy.get('@constructorIngredients').contains(ingredients.data[3].name).should('exist')
    });

    it('Проверка корректной работы модального окна', function() {
        cy.get(`[data-cy="${ingredients.data[0].name}"]`).click();
        cy.get('[data-cy="modal"]').as('modal')
        cy.get('@modal').should('exist')
        cy.get('[data-cy="modal-close"]').click().get('@modal').should('not.exist')
    });

    it('Проверка корректной работы создание заказа', function() {
        cy.get(`[data-cy="${ingredients.data[0].name}"]`).contains('Добавить').click();
        cy.get(`[data-cy="${ingredients.data[1].name}"]`).contains('Добавить').click();
        cy.get(`[data-cy="${ingredients.data[2].name}"]`).contains('Добавить').click();
        cy.get('[data-cy="order-create"]').contains('Оформить заказ').click()
        cy.get('[data-cy="modal"]').contains('Ваш заказ начали готовить').get('[data-cy="modal-close"]').click()
        cy.get('[data-cy="constructor-ingredients"]').contains(ingredients.data[1].name).should('not.exist')
    });
})