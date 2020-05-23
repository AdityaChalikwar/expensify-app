import {NavLink} from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
    <header>
        <h2>Expensify</h2>
        <NavLink to = "/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to = "/create" activeClassName="is-active">Create Page</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)