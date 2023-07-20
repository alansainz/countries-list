import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  const mockOnChange: jest.Mock = jest.fn();

  const props = {
    onChange: mockOnChange,
    label: 'test',
  };

  test('onChange  prop function is triggered', () => {
    render(<Input {...props} />);
    const input = screen.getByLabelText('test');
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(mockOnChange).toBeCalled();
  });
});
