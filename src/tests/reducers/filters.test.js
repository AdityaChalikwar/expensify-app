import filters from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filters(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filters(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '', 
        sortBy: 'amount',
        startDate: undefined, 
        endDate: undefined 
    }
    const state = filters(currentState, { type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

test('should set text', () => {
    const state = filters(undefined, { type: 'SET_TEXT_FILTER', text: 'something'})
    expect(state.text).toEqual(expect.any(String))
})

test('should set startDate', () => {
    const state = filters(undefined, {type: 'SET_START_DATE', date: moment(0).valueOf()})
    expect(state.startDate).toEqual(expect.any(Number))
})

test('should set endDate', () => {
    const state = filters(undefined, {type: 'SET_END_DATE', date: moment(0).valueOf()})
    expect(state.endDate).toEqual(expect.any(Number))
})