import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import ConfigureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import expenses from './selectors/expenses'
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'

const store = ConfigureStore()
store.dispatch(addExpense({description: 'Water Bill', amount: 2500, createdAt:1589805059688}))
store.dispatch(addExpense({description:'Gas Bill', amount:600, createdAt:1586932200000}))
store.dispatch(addExpense({description:'Rent', amount:15000, createdAt:1589265000000}))
const state = store.getState()
const visibleExpenses = expenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))