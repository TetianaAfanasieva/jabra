describe('Jabra API', () => {

    const getItem = (id, locale) => cy.request({ url:`/v1/Family/${id}?marketLocale=${locale}`, timeout: 1000 });

    it('has fetched information for Jabra Elite 25e', () => {
        getItem(621, 'en-us').then((response) => {

            // check redirect status code is 200
            expect(response).property('status').to.equal(200);

            //check if the response contains the needed data
            expect(response).property('body').to.contain({
                description: "Jabra Elite 25e. Best-in-class battery for wireless calls and music, with up to 18 hours of use. Wind and water resistant for durability on the move. Access Siri® and Google Now™ with just one touch.",
                familyId: 621,
                name: "Jabra Elite 25e",
                pageUrl: "/bluetooth-headsets/jabra-elite-25e",
                supportPageUrl: "/supportpages/jabra-elite-25e",
                hasBluetoothPairingGuide: true,
                segmentType: "Consumer",
                productName: "Jabra Elite 25e",
                summary: "Jabra Elite 25e is ideal for those who want earbuds with a long battery life and a convenient around-the-neck wearing style.",
                thumbnailUrl: "//assets.jabra.com/b/8/7/d/b87da3659fad3e1318b0cff43d5fb531886da4af_jabra_elite_25e_Black.png",
                title: "Jabra Elite 25e",
                uniqueSellingPoint: "Best-in-class battery for wireless calls and music"
            })
        })
    });

    [
        { id: 217, locale: 'en-us' },
        { id: 404, locale: 'en-us' },
        { id: 425, locale: 'en-us' },
        { id: 119, locale: 'en-us' },
        { id: 423, locale: 'en-us' },
        { id: 395, locale: 'en-us' }
    ].forEach((family) => {

        it(`has fetched for family ${family.id} `, () => {
            getItem(family.id, family.locale).then((response) => {
                // redirect status code is 200
                expect(response).property('status').to.equal(200);
                //validate if the response is not empty
                expect(response).property('body').property('description').to.not.be.empty;
                expect(response).property('body').property('familyId').to.not.be.null;
                expect(response).property('body').property('name').to.not.be.empty;
                expect(response).property('body').property('pageUrl').to.not.be.empty;
                expect(response).property('body').property('supportPageUrl').to.not.be.empty;
                expect(response).property('body').property('hasBluetoothPairingGuide').to.not.be.null;
                expect(response).property('body').property('productName').to.not.be.empty;
                expect(response).property('body').property('segmentType').to.not.be.empty;
                expect(response).property('body').property('summary').to.not.be.empty;
                expect(response).property('body').property('thumbnailUrl').to.not.be.empty;
                expect(response).property('body').property('title').to.not.be.empty;
                expect(response).property('body').property('uniqueSellingPoint').to.not.be.empty;

            });
        });
    });

});
