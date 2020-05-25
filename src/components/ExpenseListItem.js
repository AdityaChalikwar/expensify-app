import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const ExpensesListItem = ({id, description, amount, createdAt}) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h4 className="list-item__title">{description}</h4>
            <span className="list-item__subtitle">{moment(createdAt).format('MMM Do, YYYY. h:mm A')}</span>
        </div>
        <h4 className="list-item__data">{amount.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
            })}
        </h4>
    </Link>
)

export default ExpensesListItem