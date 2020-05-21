import {shallow} from 'enzyme'
import React from 'react'
import Dashboard from '../../components/Dashboard'

test('should render dashboard correctly', () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper).toMatchSnapshot() 
})