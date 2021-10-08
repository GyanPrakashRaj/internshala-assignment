import React from 'react';
import { shallow } from 'enzyme';
import { Filter } from '../index';

const defaultProps = {
  selectedOption: 'all',
  onFilter: () => {},
};

describe('Filter', () => {
  it('renders without crashing', () => {
    shallow(<Filter {...defaultProps} />);
  });

  it('should call onFilter with selected option', () => {
    const onFilterMock = jest.fn();
    const renderedFilter = shallow(<Filter {...defaultProps} onFilter={onFilterMock} />);
    renderedFilter.find('.filter-button').at(1).simulate('click');
    expect(onFilterMock.mock.calls.length).toBe(1);
    expect(onFilterMock.mock.calls[0][0]).toBe('incomplete');
  });
});
