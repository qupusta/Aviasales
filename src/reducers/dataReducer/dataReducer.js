const initState = {
  ticketList: [],
  filteredList: [],
  ticketCount: 5,
  searchId: null,
  isLoading: true,
  isError: false,
  isComplete: false,
  sort: 'cheap',
  filters: ['all'],
}

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SUCCESS_DOWNLOAD':
      return {
        ...state,
        isLoading: false,
        ticketList: [...state.ticketList, ...action.tickets],
      }
    case 'COMPLETE_DOWNLOAD':
      return { ...state, isComplete: true }
    case 'FAIL_DOWNLOAD':
      return { ...state, isError: !state.isError }
    case 'ADD_SEARCH_ID':
      return { ...state, searchId: action.id }
    case 'OVERFLOW_LIST':
      return { ...state, ticketCount: state.ticketCount + 5 }
    case 'CHANGE_SORTING':
      return { ...state, sort: action.value }
    case 'SET_FILTERS':
      return {
        ...state,
        filteredList: action.filteredList,
      }
    default:
      return state
  }
}

export default dataReducer
