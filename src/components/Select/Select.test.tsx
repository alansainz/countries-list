import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select';
import texts from '../../utils/texts.json';

describe('Select component', () => {
  const mockOnChange: jest.Mock = jest.fn();

  const props = {
    onChange: mockOnChange,
    options: ['A', 'B', 'C'],
  };

  test('onChange  prop function is triggered', () => {
    render(<Select {...props} />);
    const select = screen.getAllByText(texts.filterByRegion)[0];
    const option = screen.getByText(/a/i);

    fireEvent.click(select);
    fireEvent.click(option);

    expect(mockOnChange).toBeCalled();
  });

  test('options are rendered', () => {
    render(<Select {...props} />);
    const option = screen.getByText(/a/i);
    fireEvent.click(option);

    expect(option).toBeInTheDocument();
  });
});
