const initState = [
  {
    label: 'Самый дешевый',
    aria: 'Получит список самых дешевых билетов',
    isActive: true,
    id: 'cheap',
  },
  {
    label: 'Самый быстрый',
    aria: 'Получит список самых быстрых перелетов',
    isActive: false,
    id: 'faster',
  },
  {
    label: 'Оптимальный',
    aria: 'Получит список оптимального соотношения цены и скорости',
    isActive: false,
    id: 'optimal',
  },
]

const tabsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ACTIVATE_BTN':
      return action.tabs
    default:
      return state
  }
}

export default tabsReducer
