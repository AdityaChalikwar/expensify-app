import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const ExpensesListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{amount.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        })} 
         - 
        {moment(createdAt).format('MMM Do, YYYY. h:mm A')}</p>
        <br/>
    </div>
)

export default ExpensesListItem