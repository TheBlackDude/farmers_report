# One Acre Fund Code Test

## Problem 1

**Setup**  
Please use the provided `import.sql` script to set up your database

**Introduction**  
We'd like you to create a summary report for Long Rains Season 2011. This report should show for the Long Rains Season of 2011 how many clients and groups there are, together with their combined land sizes in each district, sector, and site. A district has several sectors, made up out of sites, with each site made up out of several groups of farmers.The land size of a client for an input is recorded together with their input choice (e.g. WS 505 Maize seed).

*Notes*
- There is only one district in the provided data. 
- Some clients are dropped, i.e. no longer active. These clients should be excluded from your calculations.
- We also have 'add-on' products like solar lights. The lands for these add-ons is recorded as -1 but this should not be included in land size calculations.

**Task**  
Write a `SELECT` statement to generate the report by site for Long Rains 2011. Include District, Season, Sector, Site, GroupCount, ClientCount, and TotalLandSize. You should order alphabetically by Sector and then by Site. Save your SQL in a file called "SiteSummary.sql"


## Problem 2

**Setup**  
We've sent you a JS file with an empty function as well as a sample test which you can run in Node.js with the [Mocha](https://mochajs.org/) framework. Make sure the test suite passes
```
npm install -g mocha
mocha sampleTests.js
```

**Introduction**  
Clients can order between 1 and 10 kg of seed, in increments of 0.5kg. We stock seed in bags of 4kg, 2kg, 1kg. On distribution day, we need to load the truck with the correct amount of each bag size for our clients.

**Task**  
Implement a function which, given a list of client seed orders, calculates the required bag count for each individual bag size. Your function should try to assign larger bag sizes first. Write this logic in the provided `getBagCounts` function in `getBagCounts.js`.

*Parameters*  
* `clientOrders`: Array of integers, each representing a client seed order. For example, `[5, 12, 12]` means three clients are receiving seed. One client ordered 5kg and two clients ordered 12kg.
* `availableBagSizes`: Array of integers, each representing an available bag size. You can assume that this will always be `[1, 2, 4]`; 

*Return value*  
Your return value should be an array of objects, each object representing one of the available bag sizes.
* Each object should have a 'size' property (number of kg in the bag) and 'count' property (the number of bags needed)
* The objects should be sorted in descending order by 'size'
* You should include all available bag sizes, even when the count is zero. In our example, we've included `{ size: 2, count: 0 }`
* Clients can receive half bags. A client who has ordered 4.5kg of seed should receive one 4kg bag and half of a 1kg bag. 
* If the client order cannot be fulfilled with whole and half bags (e.g. an order of 1.25kg), your function should throw an error.


*Bonus*  
If you are applying for the Senior Software Developer role, you **must** complete the bonus section
1. Extend `sampleTests.js` to cover other test cases
2. In different countries, we stock different bag sizes. Update your function so that it takes any assortment of bag sizes provided in the `availableBagSizes` parameter. 
    * Your function should avoid splitting bags when possible. 
    * Your function should also try to minimize the number of bags per client. What should the bag counts be if the bag sizes are 1, 3, and 4 and a client orders 6kg of seed? 


## Submission
You should submit the following files to us. We will be running automated tests on these so please adhere to our naming. We will also be evaluating your code for correctness and style.
* SiteSummary.sql
* getBagCounts.js
* (optional) sampleTests.js

Kindly put these in one folder named `<lastname>_<firstname>_codetest` and zip it for submission.


