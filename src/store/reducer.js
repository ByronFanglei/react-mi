import { combineReducers } from 'redux-immutable';
import { reducer as titleReducer } from '../common/title/store';
import { reducer as homeReducer } from '../views/home/store'
import { reducer as registerReducer } from '../views/register/store';

const reducer  = combineReducers({
  title: titleReducer,
  home: homeReducer,
  register: registerReducer
})

export default reducer;