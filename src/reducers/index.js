import { combineReducers } from 'redux'

import dataReducer from './dataReducer/dataReducer'
import filtersReducer from './filtersReducer/filtersReducer'
import tabsReducer from './tabsReducer/tabsReducer'

const rootReducer = combineReducers({
  filters: filtersReducer,
  tabs: tabsReducer,
  data: dataReducer,
})

export default rootReducer
