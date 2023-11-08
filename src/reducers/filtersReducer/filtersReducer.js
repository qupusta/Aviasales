const initState = {
  filterList: ['all'],
  checkboxes: [
    {
      label: 'Все',
      checked: true,
      htmlForId: 'all',
      filter: 'all',
    },
    {
      label: 'Без пересадок',
      checked: false,
      htmlForId: 'without',
      filter: 0,
    },
    {
      label: '1 пересадка',
      checked: false,
      htmlForId: 'one',
      filter: 1,
    },
    {
      label: '2 пересадки',
      checked: false,
      htmlForId: 'two',
      filter: 2,
    },
    {
      label: '3 пересадки',
      checked: false,
      htmlForId: 'three',
      filter: 3,
    },
  ],
}

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECKBOX':
      return {
        ...state,
        checkboxes: action.checkboxes,
        filterList: action.filterList,
      }
    default:
      return state
  }
}

export default filtersReducer
