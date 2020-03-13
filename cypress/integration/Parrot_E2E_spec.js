describe('add Parrot S450-XT to cart ', () => {

   it('should add product to cart from Home Page', () => {
        cy.visit('https://www.blueparrott.com/');
        cy.get('title').should('have.text', 'Wireless Headsets | On the go headsets | BlueParrott');
        cy.get('[data-slick-index="3"]').click();
        cy.get('[ng-click="execute()"]').click();
        cy.wait(1000);
        cy.url().should('include', 'checkout.blueparrott.com/store');
    });

});