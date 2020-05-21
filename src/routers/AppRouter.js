import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import './../styles/styles.scss'
import ExpenseDashboardPage from './../components/Dashboard'
import AddExpensePage from './../components/AddExepensePage'
import EditExpensePage from './../components/EditExpensePage'
import HelpPage from './../components/Help'
import NotFoundPage from './../components/NotFound'
import Header from './../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter