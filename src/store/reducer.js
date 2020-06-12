import { combineReducers } from 'redux-immutable';
import { reducer as titleReducer } from '../common/title/store';
import { reducer as homeReducer } from '../views/home/store';
import { reducer as registerReducer } from '../views/register/store';
import { reducer as loginReducer } from '../views/login/store';
import { reducer as cartReducer } from '../views/cart/store';

const reducer  = combineReducers({
  title: titleReducer,
  home: homeReducer,
  register: registerReducer,
  login: loginReducer,
  cart: cartReducer
})

export default reducer;