import {NavLink} from 'react-router-dom'
import React from 'react'

const Header = () => (
    <header>
        <h2>Expensify</h2>
        <NavLink to = "/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to = "/create" activeClassName="is-active">Create Page</NavLink>
    </header>
)

export default Header