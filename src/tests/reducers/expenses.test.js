import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should setup default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 544564
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('should add expense', () => {
    const newExpense = {
        id: 4,
        description: 'Coffee',
        note: '',
        createdAt: moment(0).add(7, 'days').valueOf(),
        amount: 30
    }
    const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense: newExpense})
    expect(state).toEqual([...expenses, newExpense])
})

test('should edit expense with id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: 'Tea',
            amount: 10
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(action.updates.amount)
    expect(state[1].description).toEqual(action.updates.description)
})

test('should not edit expense when id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 95,
        updates: {
            description: 'Tea',
            amount: 10
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(state)
})