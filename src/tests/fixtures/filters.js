import moment from 'moment'

const filters = {
    startDate: undefined,
    endDate: undefined,
    text: '',
    sortby: 'date'
}

const altFilters = {
    startDate: moment(0),
    endDate: moment(0).add(3, 'days'),
    text: 'bills',
    sortby: 'amount'
}

export {filters, altFilters}