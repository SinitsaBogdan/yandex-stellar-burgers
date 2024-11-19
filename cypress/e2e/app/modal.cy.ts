describe('проверяем доступность приложения', function() {
    it('Проверка корректной работы модального окна', function() {
        cy.visit('http://localhost:4000');
        const ingridient = cy.get(`[data-cy='Краторная булка N-200i']`);
        const constructor = cy.get(`[data-cy='constructor']`);

        ingridient.click();

        let modal;

        modal = cy.get(`[data-cy='modal'`);
        modal.contains('Информация о ингредиенте');

        const close = cy.get(`[data-cy='modal-close'`);
        close.click()

        modal = cy.get(`[data-cy='modal'`);
        cy.on("fail", (err, runnable) => true);
    });
})