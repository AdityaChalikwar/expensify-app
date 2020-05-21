import {setEndDate, setStartDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters'
import moment from 'moment'

test('Start date set', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('End Date set', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('Sort by date set', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    })
})

test('Sort by amount set', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
})

test('text set with provided value', () => {
    const text = 'Rent'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('text set without provided value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})