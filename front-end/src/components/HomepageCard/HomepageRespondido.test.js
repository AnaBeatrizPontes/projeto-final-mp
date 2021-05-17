import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import HomepageRespondido from './HomepageRespondido';

configure({ adapter: new Adapter() });
describe('HomepageRespondido', () => {

  it('render component with no errors', () => {
    shallow(<HomepageRespondido />);
  });

});
