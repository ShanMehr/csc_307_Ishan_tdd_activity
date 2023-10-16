const isEmpty = (stock_portfolio) => {
  return Object.keys(stock_portfolio).length === 0;
}

const uniqueStocks = (stock_portfolio) => {
  return Object.keys(stock_portfolio).length;
}

const sellStock = (stock_portfolio, stock, quantity) => {
  // Do not sell stock if portfolio is empty
  if (isEmpty(stock_portfolio)) {
    return 0;
  }
  // Do not sell stock if stock is not in portfolio
  if (!stock_portfolio.hasOwnProperty(stock)) {
    throw new Error('ShareSaleException');
  }
  // sell all stock if quantity is greater than stock in portfolio
  if (stock_portfolio[stock] < quantity) {
    throw new Error('ShareSaleException')
  }
  // sell all shares of a stock
  if (stock_portfolio[stock] === quantity) {
    quantity = stock_portfolio[stock];
    delete stock_portfolio[stock];
    return quantity;
  }
  stock_portfolio[stock] -= quantity;
  return quantity;
}

const numberShares = (stock_portfolio, stock) => {
  // Verify stock portfolio is not empty
  if (isEmpty(stock_portfolio)) {
    return 0;
  }
  // Verify stock is in portfolio
  if (!stock_portfolio.hasOwnProperty(stock)) {
    return 0;
  }
  return stock_portfolio[stock];
}

exports.isEmpty = isEmpty;
exports.uniqueStocks = uniqueStocks;
exports.sellStock = sellStock;
exports.numberShares = numberShares;
