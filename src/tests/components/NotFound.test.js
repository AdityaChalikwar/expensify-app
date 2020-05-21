import {shallow} from 'enzyme'
import React from 'react'
import NotFound from '../../components/NotFound'

test('should render not found page', () => {
    const wrapper = shallow(<NotFound />)
    expect(wrapper).toMatchSnapshot()
})