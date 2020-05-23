import React from 'react'
import {Switch, Router, Route} from 'react-router-dom'
import './../styles/styles.scss'
import ExpenseDashboardPage from './../components/Dashboard'
import AddExpensePage from './../components/AddExepensePage'
import EditExpensePage from './../components/EditExpensePage'
import NotFoundPage from './../components/NotFound'
import LoginPage from './../components/LoginPage'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'

export const history = createHistory() 

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter