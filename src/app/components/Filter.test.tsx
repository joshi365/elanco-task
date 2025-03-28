import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './Filter';
import '@testing-library/jest-dom';

describe('Filter Component', () => {
  it('should call onFilter when select changes', () => {
    const onFilter = jest.fn();
    render(<Filter onFilter={onFilter} />);
    const select = screen.getByRole('combobox');

    fireEvent.change(select, { target: { value: 'Asia' } });
    expect(onFilter).toHaveBeenCalledTimes(1);
    expect(onFilter).toHaveBeenCalledWith('Asia');
  });
});