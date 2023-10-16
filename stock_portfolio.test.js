const portfolio_test = require('./stock_portfolio.js');

// Tests to see if Stock Portfolio is Empty
test('Empty Stock Portfolio -- success', () => {
  const stock_portfolio = {};

  const result = portfolio_test.isEmpty(stock_portfolio);

  expect(true).toBe(result);

});

test('Occupied Stock Portfolio -- success', () => {
  const expected = false;
  const stock_portfolio = {
    'PLTR': 10,
  };
  expect(
    portfolio_test.isEmpty(stock_portfolio)
  ).toBe(expected);
});
  
// Tests of Unique # of Stocks in Portfolio
test('Unique # of Stocks in Portfolio -- success', () => {
  const expected = 0;
  const stock_portfolio = {};
  expect(
    portfolio_test.uniqueStocks(stock_portfolio)
  ).toBe(expected);
});

test('Unique # of Stocks in Portfolio -- success', () => {
  const expected = 9;
  const stock_portfolio = {
    'PLTR': 1,
    'TSLA': 23,
    'GOOGL': 1,
    'AMZN': 12,
    'MSFT': 2,
    'META': 20,
    'NFLX': 30,
    'NVDA': 10,
    'AMD': 51,
  };
  expect(
    portfolio_test.uniqueStocks(stock_portfolio)
  ).toBe(expected);
});

// Tests for Selling Stock
test('Sell shares of empty portfolio -- failure', () => {
  const expected = 0;
  const stock_portfolio = {};
  const stock = 'PLTR';
  const quantity = 10;
  expect(
    portfolio_test.sellStock(stock_portfolio, stock, quantity)
  ).toBe(expected);
});

// Test sale of stock not in portfolio (failure)
test('Sale of shares of stock not present in Portfolio -- failure', () => {
  const expected = 0;
  const stock_portfolio = {
    'PLTR': 10,
  };
  const stock = 'TSLA';
  const quantity = 10;
  try {
      portfolio_test.sellStock(stock_portfolio, stock, quantity)
  } catch (e) {
      expect(e.message).toBe("ShareSaleException");
  }
});

// Test sale of more shares of stock than present in portfolio (failure)
test('Sale of more share of stock than present in portfolio -- success', () => {
  const stock_portfolio = {
    'PLTR': 10,
  };
  const stock = 'PLTR';
  const expected = stock_portfolio[stock];
  const quantity = 11;
  try {
      portfolio_test.sellStock(stock_portfolio, stock, quantity)
  } catch (e) {
      expect(e.message).toBe("ShareSaleException");
  }
});

// Test sale of some shares of stock present in portfolio (success)
test('Sale of some (5) shares of stock present in portfolio -- success', () => {
  const expected = true;
  const stock_portfolio = {
    'PLTR': 10,
  };
  const stock = 'PLTR';
  const quantity = 5;
  expect(
    portfolio_test.sellStock(stock_portfolio, stock, quantity)
  ).toBe(quantity);
});

test('sale of all shares of stock present in Portfolio -- success', () => {
  const stock_portfolio = {
    'PLTR': 10,
  };
  const quantity = 10;
  const stock = 'PLTR';
  const previous_portfolio_count = portfolio_test.uniqueStocks(stock_portfolio);
  portfolio_test.sellStock(stock_portfolio, stock, quantity);
  expect(
    portfolio_test.uniqueStocks(stock_portfolio)
  ).toBe(previous_portfolio_count - 1);
});

// Tests for Aqcuiring # of shares of a stock
test("Obtain # of shares for empty portfolio -- failure", () => {
  const expected = 0;
  const stock_portfolio = {};
  const stock = 'PLTR';
  const quantity = 10;
  expect(
    portfolio_test.numberShares(stock_portfolio, stock)
  ).toBe(expected);
});

test("Obtain # of shares of a stock not present in portfolio -- failure", () => {
  const expected = 0;
  const stock_portfolio = {
    'PLTR': 10,
  };
  const stock = 'AAPL';
  const quantity = 10;
  expect(
    portfolio_test.numberShares(stock_portfolio, stock)
  ).toBe(expected);
});

test("Obtain # of shares of a stock present in portfolio -- success", () => {
  const expected = 10;
  const stock_portfolio = {
    'PLTR': 10,
  };
  const stock = 'PLTR';
  const quantity = 10;
  expect(
    portfolio_test.numberShares(stock_portfolio, stock)
  ).toBe(expected);
});

