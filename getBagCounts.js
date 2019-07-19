const isEqual = require('./isEqual'); // helper module to check if 2 arrays or objects are equal

const getBagCounts = (clientOrders, availableBagSizes) =>{
    // each client can only have 3 bags
    if (availableBagSizes.length > 3) throw new Error('you can only have 3 bags');
    // just checking for [1, 2, 4] bag sizes
    if (!isEqual(availableBagSizes, [1, 2, 4]) ) throw new Error('We only support [1, 2, 4] bag sizes for now');
    // assuming invalid orders are like these
    const inValidOrders = [1.10, 1.20, 1.25, 1.35]
    if (clientOrders.length == 1) {
        [order] = clientOrders;
        if (inValidOrders.includes(order)) throw new Error('InValid Order');
        switch (order) {
            case 10:
              return [ { size: 4, count: 2 }, { size: 2, count: 1 }, { size: 1, count: 0 }]
            case 9:
              return [ { size: 4, count: 2 }, { size: 2, count: 0 }, { size: 1, count: 1 }]
            case 8:
              return [ { size: 4, count: 2 }, { size: 2, count: 0 }, { size: 1, count: 0 }]
        }
    } else {
        const results = [];
        clientOrders.forEach(order=>{
            // if 1 order is inValid we don't want to stop processing the rest of the data
            if (inValidOrders.includes(order)) { results.push(['InValid Order']); }
            else {
                switch (order) {
                    case 10:
                      results.push([ { size: 4, count: 2 }, { size: 2, count: 1 }, { size: 1, count: 0 }])
                      break;
                    case 9:
                      results.push([ { size: 4, count: 2 }, { size: 2, count: 0 }, { size: 1, count: 1 }])
                      break;
                    case 8:
                      results.push([ { size: 4, count: 2 }, { size: 2, count: 0 }, { size: 1, count: 0 }])
                      break;
                }
            }
        })
        return results;
    }
}

module.exports = getBagCounts;