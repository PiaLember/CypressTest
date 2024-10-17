import { faker } from '@faker-js/faker';

describe('Blog Test Suite', () => {
    // This runs before each test
    beforeEach(() => {
        // Visit the homepage
        cy.visit('https://pialember23.thkit.ee');
    });



    it('Comment Test', () => {
        // Find and click the second article
        cy.get('#uc_post_blocks_elementor_7bcce25 div:first-child a')
          .eq(1).click();

        // Generate some dummy text for the comment
        const dummyText = faker.lorem.sentence(5);

        // Find comment textarea and enter the text
        cy.get('#comment').type(dummyText);

        // Find submit button and click it
        cy.get('#submit').click();

        // Verify the title contains 'Comment Submission Failure'
        cy.title().should('contain', 'Comment Submission Failure');
    });

    it('Comment Goes through Test ', () => {
        // Find and click the second article
        cy.get('#uc_post_blocks_elementor_7bcce25 div:first-child a')
          .eq(1)
          .then(($el) => {
            const linkText = $el.text(); // Get text of the article link
            cy.wrap($el).click(); // Click the article

        // Generate some dummy text for the comment
        const dummyText = faker.lorem.sentence(5);

        // Find comment textarea and enter the text
        cy.get('#comment').type(dummyText);
        cy.wait(20000);

        // Find submit button and click it
        cy.get('#submit').click();

        // Verify that the page title contains the article's name
        cy.title().should('contain', linkText);
    });

});
})