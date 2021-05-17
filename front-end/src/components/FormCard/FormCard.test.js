import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import FormCard from './FormCard';

configure({ adapter: new Adapter() });
describe('FormCard', () => {

  it('render component with no errors', () => {
    shallow(<FormCard />);
  });

});
