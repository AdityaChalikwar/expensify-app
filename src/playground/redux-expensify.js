import {createStore, combineReducers } from 'redux'
import uuid from 'uuid'

//ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//REMOVE_EXPENSE
const removeExpense = ({id} = {}, action) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
}) 
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//SET_START_DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})
//SET_END_DATE
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})


//Expense Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => 
                expense.id === action.id ? { 
                ...expense, ...action.updates
                }
                : expense) 
        default:
            return state
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state
    }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startMatch && endMatch && textMatch
    }).sort((a, b) => {
        if(sortBy === 'date')
            return a.createdAt < b.createdAt ? 1 : -1
        else
            return a.amount > b.amount ? 1 : -1
    })
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 14000, createdAt:-41000}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 30, createdAt:-1000}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 100}))
//store.dispatch(setTextFilter('coffee'))
// store.dispatch(setTextFilter())
// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

//store.dispatch(setStartDate(125))
//store.dispatch(setEndDate(154))

const demoState = {
    expenses: [{
        id: '123',
        description: 'rent',
        note: 'this is the final payment',
        amount : 15000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}