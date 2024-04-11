import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component Tests', () => {
  // beforeEach(() => {
  //   // Reset fetch mock before each test
  //   global.fetch = jest.fn();
  // });

 
  

  test('renders without crashing', () => {
    render(<App />);
  });

  test('displays Chart component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('Chart')).toBeInTheDocument();
  });

  test('fetches data from API and renders balance correctly', async () => {
    const mockData = [{
      balance: 1000,
      ledger_balance: 1500,
      total_payout: 500,
      total_revenue: 2000,
      pending_payout: 300,
    }];

    global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  })
);
    const { findByText } = render(<App />);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(3));

    Object.entries(mockData).forEach(async ([key, value]) => {
      const expectedText = `USD ${value.toLocaleString()}`;
      if (key !== 'total_revenue') {
        expect(await findByText(expectedText)).toBeInTheDocument();
      }
    });
  });

});
