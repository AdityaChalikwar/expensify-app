import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info : {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't Share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)

ReactDOM.render(<AdminInfo isAdmin={true} info='Hi Aditya'/>, document.getElementById('app'))