import moment from 'moment'

const expenses = [{
        id: 1,
        description: 'rent',
        note: '',
        amount: 15000,
        createdAt: 0
    },{
        id: 2,
        description: 'credit card',
        note: '',
        amount: 450000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },{
        id: 3,
        description: 'gum',
        note: '',
        amount: 5,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]

export default expenses