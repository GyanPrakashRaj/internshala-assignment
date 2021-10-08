import React from 'react';
import { shallow } from 'enzyme';
import { ItemsList } from '../index';

const defaultProps = {
  items: [],
  onRemove: () => {},
  onToggle: () => {},
  selectedOption: 'all',
};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    const items = [{ id: 1, content: 'Test 1' }, { id: 2, content: 'Test 2' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('li')).toHaveLength(2);
  });

  it('should call onRemove with id', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const onRemoveMock = jest.fn();
    const renderedItem = shallow(
      <ItemsList {...defaultProps} items={items} onRemove={onRemoveMock} />);
    renderedItem.find('.items-remove').simulate('click');
    expect(onRemoveMock.mock.calls.length).toBe(1);
    expect(onRemoveMock.mock.calls[0][0]).toBe(1);
  });

  it('should call onToggle with id', () => {
    const items = [{ id: 1, complete: false, content: 'Test 1' }];
    const onToggleMock = jest.fn();
    const renderedItem = shallow(
      <ItemsList {...defaultProps} items={items} onToggle={onToggleMock} />);
    renderedItem.find('.items-toggle').simulate('change');
    expect(onToggleMock.mock.calls.length).toBe(1);
    expect(onToggleMock.mock.calls[0][0]).toBe(1);
  });
});
