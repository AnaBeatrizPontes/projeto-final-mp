import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import AnswererCard from './AnswererCard';

configure({ adapter: new Adapter() });
describe('AnswererCard', () => {

  it('render component with no errors', () => {
    shallow(<AnswererCard />);
  });

});
