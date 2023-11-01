import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import addReducer from './Reducers/addReducer';
import thunk from 'redux-thunk';


const store= createStore(addReducer, applyMiddleware(thunk));

export default store;