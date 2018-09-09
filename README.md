# Feed Reader Testing

## Project Overview

Learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

## Running the Application

1. Locate the index.html file and open it in your browser.

## Implementing Tests Using the Jasmine Framework

Putting into practice skills for a "test-driven development".
* First test - tests to make sure that the allFeeds variable has been defined and that it is not empty.
* Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
* Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
* Test that ensures the menu element is hidden by default.
* Test that ensures the menu changes visibility when the menu icon is clicked.
* Tests if the loadFeed function has at least a single '.entry' within the '.feed' container
* Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
