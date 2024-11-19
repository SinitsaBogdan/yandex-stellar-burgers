describe('проверяем доступность приложения', function() {
    it('Приложение должно быть доступно по адресу localhost:4000', function() {
        cy.visit('http://localhost:4000');
    });
});