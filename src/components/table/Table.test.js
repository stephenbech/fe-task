import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Datatable from './Table'

describe('Datatable Component', () => {
  // Mocking fetch function for useEffect
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );

  test('renders without crashing', () => {
    render(<Datatable />);
  });

  test('displays correct number of transactions', async () => {
    const { getByText } = render(<Datatable />);
    await waitFor(() => {
      expect(getByText('0 Transactions')).toBeInTheDocument();
    });
  });

  test('displays Export button', () => {
    const { getByText } = render(<Datatable />);
    expect(getByText('Export')).toBeInTheDocument();
  });
  

  test('exports transactions', () => {
    // Render component
    const { getByText } = render(<Datatable />);
    
    // Click export button
    fireEvent.click(getByText('Export'));
    
  });

});
