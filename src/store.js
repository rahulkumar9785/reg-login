import { legacy_createStore as createStore} from 'redux'
//import addReducer from './Reducers/addReducer';
import rootReducer from './Reducers'


const store= createStore(rootReducer);

export default store;