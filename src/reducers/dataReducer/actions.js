export const addSearchId = (id) => ({ type: 'ADD_SEARCH_ID', id })

export const addTickets = (tickets) => ({
  type: 'SUCCESS_DOWNLOAD',
  tickets,
})

export const completeDownload = () => ({ type: 'COMPLETE_DOWNLOAD' })

export const failDownload = () => ({ type: 'FAIL_DOWNLOAD' })

export const doubleFailDownload = () => ({ type: 'REPEATED_FAIL_DOWNLOAD' })

export const completeFail = () => ({ type: 'COMPLETE_FAIL' })

export const overflowList = () => ({ type: 'OVERFLOW_LIST' })

export const performFiltering = (filteredList) => ({
  type: 'SET_FILTERS',
  filteredList,
})

export const changeSortValue = (value) => ({
  type: 'CHANGE_SORTING',
  value,
})
