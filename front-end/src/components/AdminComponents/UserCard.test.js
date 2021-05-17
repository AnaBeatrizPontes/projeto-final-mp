import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import UserCard from './UserCard';

configure({ adapter: new Adapter() });
describe('UserCard', () => {

  it('render component with no errors', () => {
    shallow(<UserCard />);
  });

});
