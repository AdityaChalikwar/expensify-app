import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

const editExpense = jest.fn()
const startRemoveExpense = jest.fn()
const history = {push: jest.fn()}
const wrapper = shallow(
    <EditExpensePage 
        expense={expenses[1]} 
        editExpense={editExpense} 
        history={history}
        startRemoveExpense={startRemoveExpense}
    />)

test('should render editExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should edit data correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test('should remove data correctly', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[1].id
    })
})