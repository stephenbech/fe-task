import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Filter from './Sheet';

describe('Filter Component Tests', () => {
  test('renders without crashing', () => {
    render(<Filter />);
  });

  test('initial state is set correctly', () => {
    const { getByTestId } = render(<Filter />);
    expect(getByTestId('transactionType').value).toBe('');
    expect(getByTestId('name').value).toBe('');
    expect(getByTestId('startDate')).toBeNull();
    expect(getByTestId('endDate')).toBeNull();
  });

  test('clicking filter button toggles filter sheet', () => {
    const { getByText, queryByTestId } = render(<Filter />);
    const filterButton = getByText('Filter');
    fireEvent.click(filterButton);
    expect(queryByTestId('transactionType')).toBeInTheDocument();

    fireEvent.click(filterButton);
    expect(queryByTestId('transactionType')).not.toBeInTheDocument();
  });

  test('clear button resets all inputs', () => {
    const { getByText, getByTestId } = render(<Filter />);
    const transactionTypeInput = getByTestId('transactionType');
    const nameInput = getByTestId('name');
    const clearButton = getByText('Clear');

    fireEvent.change(transactionTypeInput, { target: { value: 'Store Transactions' } });
    fireEvent.change(nameInput, { target: { value: 'Pending' } });
    fireEvent.click(clearButton);

    expect(transactionTypeInput.value).toBe('');
    expect(nameInput.value).toBe('');
  });

  test('clicking apply button calls onFilterChange with correct parameters', () => {
    const onFilterChangeMock = jest.fn();
    const { getByText } = render(<Filter onFilterChange={onFilterChangeMock} />);
    const applyButton = getByText('Apply');
    fireEvent.click(applyButton);

    expect(onFilterChangeMock).toHaveBeenCalledTimes(1);
    expect(onFilterChangeMock).toHaveBeenCalledWith({
      transactionTypes: [],
      transactionStatuses: [],
      startDate: null,
      endDate: null,
    });
  });
});
