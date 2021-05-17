import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import AssignForms from './AssignForms';

configure({ adapter: new Adapter() });
describe('AssignForms', () => {

  it('render component with no errors', () => {
    shallow(<AssignForms />);
  });

});
