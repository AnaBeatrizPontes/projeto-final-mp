import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import HomepageCard from './HomepageCard';

configure({ adapter: new Adapter() });
describe('HomepageCard', () => {

  it('render component with no errors', () => {
    shallow(<HomepageCard />);
  });

});
