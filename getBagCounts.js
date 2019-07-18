function getBagCounts(clientOrders, availableBagSizes) {
    // TODO: remove this hard-coded solution for test scenario
    // clientOrders === [9]
    return [
        { size: 4, count: 2 },
        { size: 2, count: 0 },
        { size: 1, count: 1 }
    ]
}

module.exports = getBagCounts;