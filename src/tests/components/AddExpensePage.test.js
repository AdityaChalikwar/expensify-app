import React from 'react'
import {shallow} from 'enzyme'
import {AddExpensePage} from '../../components/AddExepensePage'
import expenses from '../fixtures/expenses'

const addExpenseFunction = jest.fn()
const history = {push: jest.fn()}
const wrapper = shallow(<AddExpensePage addExpenseFunction={addExpenseFunction} history={history}/>)

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpenseFunction).toHaveBeenLastCalledWith(expenses[1])
})