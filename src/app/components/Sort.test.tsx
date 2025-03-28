import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sort from './Sort';
import '@testing-library/jest-dom';

describe('Sort Component', () => {
  it('should call onSortOrder when select changes', () => {
    const onSortOrder = jest.fn();
    render(<Sort onSortOrder={onSortOrder} />);
    const select = screen.getByRole('combobox');

    fireEvent.change(select, { target: { value: 'desc' } });
    expect(onSortOrder).toHaveBeenCalledTimes(1);
    expect(onSortOrder).toHaveBeenCalledWith('desc');
  });
});