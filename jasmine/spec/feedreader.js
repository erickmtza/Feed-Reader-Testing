/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        // Tests if allfeeds have been defined and that it is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Test that loops through the allFeeds object and ensures it has a URL defined and that URL is not empty.
         it('has URL defined and is not empty', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
         });

        // Test that loops through the allFeeds object and ensures it has a name defined and that the name is not empty.
         it('has NAME defined and is not empty', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
         });
    });


    // Test suite to test the menu functionality
    describe('The menu', function() {

        // Test that ensures the menu element is hidden by searching for the '.menu-hidden' in the body tag
         it('ensures menu element is hidden', function() {
           expect($('body').hasClass('menu-hidden')).toBe(true);
         })

         // Test that ensures the menu changes visibility when the menu icon is clicked.
          it('changes menu visibility', function() {
              if($('body').hasClass('menu-hidden')) {
                expect($('body').hasClass('menu-hidden')).toBe(true);
              } else {
                expect($('body').hasClass('menu-hidden')).toBe(false);
              }
          });

    });
    // Test suite to test for Initial Entries
    describe('Initial Entries', function() {

        // Calls a function to do an asynchronous request
        beforeEach(function(done) {
          loadFeed(0, done);
        })
        // Test that ensures the loadFeed has at least a single .entry element within the .feed container.
         it('checks for single element in .feed container', function() {
            expect($('.feed').children.length > 0).toBe(true);
         });

    });

    // Test suite that tests for New Feed Selections
    describe('New Feed Selection', function() {

              // Ensures that the new feed is loaded by the loadFeed function
              beforeEach(function(done) {
                loadFeed(0, function() {
                  firstEntry = $('.feed').find(allFeeds.url);
                });
                loadFeed(1, function() {
                  secondEntry = $('.feed').find(allFeeds.url);
                  done();
                });
              })
              // Test that ensures that the content actually changes.
               it('updates content', function() {
                 expect(firstEntry).not.toBe(secondEntry);
               })
          });
}());
