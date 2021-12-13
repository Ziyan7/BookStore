import { createStore } from 'redux'
import reducers from './reducer/index'
//import reducers from '../redux/reducer/usernotes'

const store = createStore(reducers,{},
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;